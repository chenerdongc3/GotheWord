import {
  expect,
  test,
  type BrowserContext,
  type Page,
  type Route,
} from "@playwright/test";
import { ALL_WORDS_BY_ID } from "../../app/content/word-books.ts";

const USER_ID = "00000000-0000-4000-8000-000000000099";
const STATE_KEY = `gotheword-state-v2:${USER_ID}`;
const AUTH_KEY = "sb-mobile-test-auth-token";

type LearningState = {
  version: 3;
  activeLevel: "A1" | "A2" | "B1";
  dailyGoal: 5 | 10 | 20;
  freeStudyBatchSize: 5 | 10 | 20;
  progress: Record<string, unknown>;
  stats: Record<string, unknown>;
  activeSession: Record<string, unknown> | null;
};

type SyncServer = {
  state: LearningState;
  revision: number;
  saveCount: number;
  loadCount: number;
  conflictCount: number;
  activeSaves: number;
  maxActiveSaves: number;
  failNextSaveWithConflict: boolean;
};

function emptyState(): LearningState {
  return {
    version: 3,
    activeLevel: "A1",
    dailyGoal: 10,
    freeStudyBatchSize: 5,
    progress: {},
    stats: {},
    activeSession: null,
  };
}

function createAccessToken() {
  const encode = (value: unknown) =>
    Buffer.from(JSON.stringify(value)).toString("base64url");
  return [
    encode({ alg: "HS256", typ: "JWT" }),
    encode({
      aud: "authenticated",
      exp: Math.floor(Date.now() / 1000) + 3_600,
      role: "authenticated",
      sub: USER_ID,
    }),
    "learning-sync-test-signature",
  ].join(".");
}

async function installAuthenticatedState(
  context: BrowserContext,
  state: LearningState,
) {
  const token = createAccessToken();
  const savedAt = new Date().toISOString();
  await context.addInitScript(
    ({ authKey, stateKey, userId, accessToken, learningState, now }) => {
      window.localStorage.setItem(
        authKey,
        JSON.stringify({
          access_token: accessToken,
          refresh_token: "learning-sync-refresh-token",
          expires_in: 3_600,
          expires_at: Math.floor(Date.now() / 1000) + 3_600,
          token_type: "bearer",
          user: {
            id: userId,
            aud: "authenticated",
            role: "authenticated",
            email: "learning-sync@users.gotheword.local",
            app_metadata: { provider: "email", providers: ["email"] },
            user_metadata: { username: "同步验收" },
            identities: [],
            created_at: now,
          },
        }),
      );
      if (!window.localStorage.getItem(stateKey)) {
        window.localStorage.setItem(
          stateKey,
          JSON.stringify({
            userId,
            revision: 0,
            state: learningState,
            dirty: false,
            savedAt: now,
          }),
        );
      }
    },
    {
      authKey: AUTH_KEY,
      stateKey: STATE_KEY,
      userId: USER_ID,
      accessToken: token,
      learningState: state,
      now: savedAt,
    },
  );
}

function remoteBody(server: SyncServer) {
  return JSON.stringify({
    state: server.state,
    schema_version: 3,
    revision: server.revision,
    updated_at: new Date().toISOString(),
  });
}

async function handleSyncRoute(route: Route, server: SyncServer) {
  const request = route.request();
  const url = request.url();
  if (
    request.method() === "GET" &&
    url.includes("/rest/v1/learning_states")
  ) {
    server.loadCount += 1;
    await route.fulfill({
      status: 200,
      contentType: "application/json",
      body: remoteBody(server),
    });
    return;
  }
  if (
    request.method() === "POST" &&
    url.includes("/rest/v1/rpc/save_learning_state")
  ) {
    server.saveCount += 1;
    server.activeSaves += 1;
    server.maxActiveSaves = Math.max(
      server.maxActiveSaves,
      server.activeSaves,
    );
    if (server.failNextSaveWithConflict) {
      server.failNextSaveWithConflict = false;
      server.conflictCount += 1;
      server.activeSaves -= 1;
      await route.fulfill({
        status: 409,
        contentType: "application/json",
        body: JSON.stringify({
          code: "40001",
          message: "learning_state_revision_conflict",
        }),
      });
      return;
    }

    const body = request.postDataJSON() as {
      expected_revision: number;
      next_state: LearningState;
    };
    if (body.expected_revision !== server.revision) {
      server.conflictCount += 1;
      server.activeSaves -= 1;
      await route.fulfill({
        status: 409,
        contentType: "application/json",
        body: JSON.stringify({
          code: "40001",
          message: "learning_state_revision_conflict",
        }),
      });
      return;
    }
    server.state = body.next_state;
    server.revision += 1;
    server.activeSaves -= 1;
    await route.fulfill({
      status: 200,
      contentType: "application/json",
      body: remoteBody(server),
    });
    return;
  }
  await route.fulfill({
    status: 401,
    contentType: "application/json",
    body: JSON.stringify({ message: "not used by learning sync test" }),
  });
}

async function prepare(
  context: BrowserContext,
  state = emptyState(),
) {
  const server: SyncServer = {
    state: structuredClone(state),
    revision: 0,
    saveCount: 0,
    loadCount: 0,
    conflictCount: 0,
    activeSaves: 0,
    maxActiveSaves: 0,
    failNextSaveWithConflict: false,
  };
  await installAuthenticatedState(context, state);
  await context.route("**/rest/v1/**", (route) =>
    handleSyncRoute(route, server),
  );
  return server;
}

async function openWriter(page: Page) {
  await page.goto("/");
  await expect(page.getByText("已同步", { exact: true })).toBeVisible();
}

test("UI 时钟保持 1Hz，60 秒活动区间只产生检查点保存", async ({
  context,
  page,
}) => {
  await page.clock.install();
  const server = await prepare(context);
  await openWriter(page);

  await page.getByRole("button", { name: "自由学习", exact: true }).click();
  await page.clock.runFor(2_100);
  await expect(page.getByLabel(/本次学习 00:02/)).toBeVisible();
  await expect.poll(() => server.saveCount).toBe(1);

  for (let index = 0; index < 3; index += 1) {
    await page.clock.runFor(19_000);
    await page.locator("body").dispatchEvent("pointerdown");
    await page.clock.runFor(1_000);
  }

  await expect(page.getByLabel(/本次学习 01:02/)).toBeVisible();
  expect(server.saveCount).toBeLessThanOrEqual(3);
  expect(server.maxActiveSaves).toBe(1);

  await page.getByRole("button", { name: "暂停", exact: true }).click();
  await expect
    .poll(() =>
      page.evaluate((key) => {
        const raw = window.localStorage.getItem(key);
        return raw
          ? JSON.parse(raw).state.activeSession?.elapsedSeconds
          : null;
      }, STATE_KEY),
    )
    .toBeGreaterThanOrEqual(60);
});

test("快速完成 10 次答题会合并保存并可在刷新后恢复", async ({
  context,
  page,
}) => {
  await page.clock.install();
  const initial = emptyState();
  initial.freeStudyBatchSize = 10;
  const server = await prepare(context, initial);
  await openWriter(page);
  await page.getByRole("button", { name: "自由学习", exact: true }).click();

  for (let index = 0; index < 9; index += 1) {
    await page
      .getByRole("button", { name: "我记住了，下一个", exact: true })
      .click();
  }
  await page
    .getByRole("button", { name: "我记住了，开始测试", exact: true })
    .click();

  for (let index = 0; index < 10; index += 1) {
    const wordId = await page.evaluate((key) => {
      const raw = window.localStorage.getItem(key);
      return raw
        ? JSON.parse(raw).state.activeSession?.queue?.[0]
        : null;
    }, STATE_KEY);
    expect(typeof wordId).toBe("string");
    const translation = ALL_WORDS_BY_ID.get(wordId as string)?.translation;
    expect(translation).toBeTruthy();
    await page
      .getByRole("button")
      .filter({ hasText: translation! })
      .first()
      .click();
    await page.clock.runFor(1_600);
  }

  await page.clock.runFor(3_000);
  await expect
    .poll(
      () =>
        (server.state.activeSession as { answers?: number } | null)
          ?.answers,
    )
    .toBe(10);
  expect(server.saveCount).toBeLessThan(10);
  expect(server.maxActiveSaves).toBe(1);

  await page.reload();
  await expect(
    page.getByText("继续上次的学习吗？", { exact: true }),
  ).toBeVisible();
  const restoredAnswers = await page.evaluate((key) => {
    const raw = window.localStorage.getItem(key);
    return raw ? JSON.parse(raw).state.activeSession?.answers : null;
  }, STATE_KEY);
  expect(restoredAnswers).toBe(10);
});

test("同浏览器双标签只有 writer 保存，接管后原标签停止", async ({
  context,
  page,
}) => {
  const server = await prepare(context);
  await openWriter(page);
  await page.getByRole("button", { name: "自由学习", exact: true }).click();

  const follower = await context.newPage();
  await follower.goto("/");
  await expect(
    follower.getByText("其他标签正在学习", { exact: true }),
  ).toBeVisible();
  await follower.getByRole("button", { name: "继续本次学习" }).click();
  await expect(
    follower.getByText("另一个标签正在学习", { exact: true }),
  ).toBeVisible();

  await follower.getByRole("button", { name: "接管此标签" }).click();
  await expect(
    follower.getByText("其他标签正在学习", { exact: true }),
  ).toBeHidden();
  await expect(
    page.getByText("其他标签正在学习", { exact: true }),
  ).toBeVisible();

  await follower
    .getByRole("button", { name: "继续本次学习" })
    .click();
  await expect.poll(() => server.saveCount).toBeGreaterThanOrEqual(1);
  expect(server.conflictCount).toBe(0);
  expect(server.maxActiveSaves).toBe(1);
});

test("CAS 冲突后只读取一次远端，用户选择前不再保存", async ({
  context,
  page,
}) => {
  await page.clock.install();
  const server = await prepare(context);
  server.failNextSaveWithConflict = true;
  await openWriter(page);
  const initialLoadCount = server.loadCount;

  await page.getByRole("tab", { name: "设置" }).click();
  await page.getByRole("radio", { name: /每天 20 个/ }).check();
  await page.clock.runFor(2_100);

  await expect(
    page.getByText("本设备与云端进度冲突", { exact: true }),
  ).toBeVisible();
  expect(server.saveCount).toBe(1);
  expect(server.loadCount).toBe(initialLoadCount + 1);

  await page.clock.runFor(30_000);
  expect(server.saveCount).toBe(1);
  expect(server.loadCount).toBe(initialLoadCount + 1);
});

test("离线 mutation 即时写缓存，online 后只保存最新快照", async ({
  context,
  page,
}) => {
  const server = await prepare(context);
  await openWriter(page);
  await context.setOffline(true);

  await page.getByRole("tab", { name: "设置" }).click();
  await page.getByRole("radio", { name: /每天 20 个/ }).check();
  await expect
    .poll(() =>
      page.evaluate((key) => {
        const raw = window.localStorage.getItem(key);
        return raw ? JSON.parse(raw).state.dailyGoal : null;
      }, STATE_KEY),
    )
    .toBe(20);
  expect(server.saveCount).toBe(0);

  await context.setOffline(false);
  await expect.poll(() => server.saveCount).toBe(1);
  expect(server.state.dailyGoal).toBe(20);
  expect(server.maxActiveSaves).toBe(1);
});
