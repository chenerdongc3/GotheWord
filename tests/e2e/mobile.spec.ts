import { expect, test, type Page, type TestInfo } from "@playwright/test";
import { mkdir } from "node:fs/promises";

const USER_ID = "00000000-0000-4000-8000-000000000011";
const STATE_KEY = `gotheword-state-v2:${USER_ID}`;
const AUTH_KEY = "sb-mobile-test-auth-token";
const VIEWPORTS = [
  { width: 320, height: 720 },
  { width: 360, height: 800 },
  { width: 375, height: 667 },
  { width: 390, height: 844 },
  { width: 430, height: 932 },
];

type LearningState = {
  version: 2 | 3;
  activeLevel?: "A1" | "A2" | "B1";
  dailyGoal?: 5 | 10 | 20;
  wordBookId?: "a1" | "a2";
  progress: Record<string, unknown>;
  stats: Record<string, unknown>;
  activeSession: Record<string, unknown> | null;
};

type RemoteState = {
  state: LearningState;
  schemaVersion: number;
  revision: number;
  updatedAt: string;
};

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
    "mobile-test-signature",
  ].join(".");
}

async function openAuthenticated(
  page: Page,
  state: LearningState,
  options: {
    envelope?: {
      revision: number;
      dirty: boolean;
      savedAt: string;
    };
    remote?: RemoteState;
    globalLegacyState?: LearningState;
    skipUserState?: boolean;
  } = {},
) {
  const accessToken = createAccessToken();
  const now = new Date().toISOString();

  await page.route("**/rest/v1/**", async (route) => {
    if (
      options.remote &&
      route.request().method() === "GET" &&
      route.request().url().includes("/rest/v1/learning_states")
    ) {
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({
          state: options.remote.state,
          schema_version: options.remote.schemaVersion,
          revision: options.remote.revision,
          updated_at: options.remote.updatedAt,
        }),
      });
      return;
    }

    await route.fulfill({
      status: 401,
      contentType: "application/json",
      body: JSON.stringify({ message: "mobile test uses local state" }),
    });
  });
  await page.addInitScript(
    ({
      key,
      token,
      stateKey,
      learningState,
      userId,
      createdAt,
      envelope,
      globalLegacyState,
      skipUserState,
    }) => {
      window.localStorage.setItem(
        key,
        JSON.stringify({
          access_token: token,
          refresh_token: "mobile-test-refresh-token",
          expires_in: 3_600,
          expires_at: Math.floor(Date.now() / 1000) + 3_600,
          token_type: "bearer",
          user: {
            id: userId,
            aud: "authenticated",
            role: "authenticated",
            email: "mobile-test@users.gotheword.local",
            app_metadata: { provider: "email", providers: ["email"] },
            user_metadata: { username: "移动端验收" },
            identities: [],
            created_at: createdAt,
          },
        }),
      );
      if (!skipUserState) {
        window.localStorage.setItem(
          stateKey,
          JSON.stringify(
            envelope
              ? {
                  userId,
                  revision: envelope.revision,
                  state: learningState,
                  dirty: envelope.dirty,
                  savedAt: envelope.savedAt,
                }
              : learningState,
          ),
        );
      }
      if (globalLegacyState) {
        window.localStorage.setItem(
          "gotheword-state-v1",
          JSON.stringify(globalLegacyState),
        );
      }
    },
    {
      key: AUTH_KEY,
      token: accessToken,
      stateKey: STATE_KEY,
      learningState: state,
      userId: USER_ID,
      createdAt: now,
      envelope: options.envelope,
      globalLegacyState: options.globalLegacyState,
      skipUserState: options.skipUserState,
    },
  );
  await page.goto("/");
}

async function expectNoHorizontalOverflow(page: Page) {
  await expect
    .poll(() =>
      page.evaluate(
        () =>
          document.documentElement.scrollWidth <=
          document.documentElement.clientWidth,
      ),
    )
    .toBe(true);
}

async function capture(page: Page, testInfo: TestInfo, name: string) {
  const directory = "output/playwright/screenshots";
  await mkdir(directory, { recursive: true });
  await page.screenshot({
    path: `${directory}/${testInfo.project.name}-${name}.png`,
    fullPage: true,
  });
}

async function expectTouchTargets(page: Page) {
  const undersized = await page
    .locator("button, input[type=radio], [role=tab]")
    .evaluateAll((elements) =>
      elements.flatMap((element) => {
        const rect = element.getBoundingClientRect();
        const visible = rect.width > 0 && rect.height > 0;
        return visible && (rect.width < 24 || rect.height < 24)
          ? [`${element.textContent?.trim() || element.getAttribute("aria-label")}: ${rect.width}×${rect.height}`]
          : [];
      }),
    );
  expect(undersized).toEqual([]);
}

async function expectCardContrast(page: Page, label: string) {
  const ratio = await page
    .getByText(label, { exact: true })
    .locator("..")
    .evaluate((card) => {
      const parse = (value: string) =>
        (value.match(/[\d.]+/g) ?? []).slice(0, 3).map(Number);
      const luminance = (value: string) => {
        const [red, green, blue] = parse(value).map((component) => {
          const normalized = component / 255;
          return normalized <= 0.04045
            ? normalized / 12.92
            : ((normalized + 0.055) / 1.055) ** 2.4;
        });
        return 0.2126 * red + 0.7152 * green + 0.0722 * blue;
      };
      const style = getComputedStyle(card);
      const foreground = luminance(style.color);
      const background = luminance(style.backgroundColor);
      return (
        (Math.max(foreground, background) + 0.05) /
        (Math.min(foreground, background) + 0.05)
      );
    });
  expect(ratio).toBeGreaterThanOrEqual(4.5);
}

test("登录与注册在 320–430px 无横向溢出或标题重叠", async ({ page }, testInfo) => {
  await page.goto("/");
  await expect(page.getByText("欢迎回来", { exact: true })).toBeVisible();

  for (const viewport of VIEWPORTS) {
    await page.setViewportSize(viewport);
    await expectNoHorizontalOverflow(page);

    const title = await page.getByText("欢迎回来", { exact: true }).boundingBox();
    const description = await page
      .getByText("输入真实邮箱和密码，继续今天的学习。", { exact: true })
      .boundingBox();
    expect(title).not.toBeNull();
    expect(description).not.toBeNull();
    expect(title!.y + title!.height).toBeLessThanOrEqual(description!.y);
  }

  await page.getByRole("button", { name: "第一次来？使用邮箱注册" }).click();
  await expect(page.getByText("创建账号", { exact: true })).toBeVisible();
  for (const viewport of VIEWPORTS) {
    await page.setViewportSize(viewport);
    await expectNoHorizontalOverflow(page);
  }
  await expectTouchTargets(page);
  await capture(page, testInfo, "auth-register-320-430");
});

test("首次目标、Header、Tabs、统计、设置与 Modal 适配移动视口", async ({
  page,
}, testInfo) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await openAuthenticated(page, {
    version: 2,
    progress: {},
    stats: {},
    activeSession: null,
  });
  await expect(page.getByRole("heading", { name: "把德语，慢慢种进记忆里。" })).toBeVisible();
  await expectNoHorizontalOverflow(page);

  await page.getByRole("button", { name: "开始我的德语旅程" }).click();
  await expect(page.getByText("移动端验收", { exact: true })).toBeVisible();
  await expect(page.getByRole("tab", { name: "今日学习" })).toBeVisible();
  for (const viewport of VIEWPORTS) {
    await page.setViewportSize(viewport);
    await expectNoHorizontalOverflow(page);
  }

  await page.setViewportSize({ width: 320, height: 720 });
  const header = await page.getByRole("banner").boundingBox();
  const tabs = await page.getByRole("tablist", { name: "主要页面" }).boundingBox();
  expect(header).not.toBeNull();
  expect(tabs).not.toBeNull();
  expect(header!.y + header!.height).toBeLessThanOrEqual(tabs!.y);

  await page.getByRole("tab", { name: "学习统计" }).click();
  await expect(page.getByRole("heading", { name: "看见每一天积累起来的力量。" })).toBeVisible();
  for (const viewport of VIEWPORTS) {
    await page.setViewportSize(viewport);
    await expectNoHorizontalOverflow(page);
  }
  for (const label of ["今日新词", "今日复习", "已掌握", "薄弱单词"]) {
    await expectCardContrast(page, label);
  }
  await expectTouchTargets(page);

  const settingsTab = page.getByRole("tab", { name: "设置" });
  await settingsTab.focus();
  await page.keyboard.press("Enter");
  await expect(settingsTab).toHaveAttribute("aria-selected", "true");
  await expect(
    page.getByRole("radio", { name: /Goethe A1.*共 817 词.*已学 0 词/ }),
  ).toBeChecked();
  const a2Book = page.getByRole("radio", {
    name: /Goethe A2.*共 1038 词.*已学 0 词/,
  });
  await a2Book.check();
  await expect(a2Book).toBeChecked();
  await expect(
    page.getByText("共 1038 词 · 已学 0 词", { exact: true }).first(),
  ).toBeVisible();
  await expectNoHorizontalOverflow(page);
  await page.getByRole("button", { name: "清除学习记录" }).click();
  await expect(page.getByText("确认清除学习记录？", { exact: true })).toBeVisible();
  for (const viewport of VIEWPORTS) {
    await page.setViewportSize(viewport);
    await expectNoHorizontalOverflow(page);
  }
  await capture(page, testInfo, "settings-modal");
});

test("学习、反馈与报告流程在移动视口保持可见", async ({ page }, testInfo) => {
  await openAuthenticated(page, {
    version: 2,
    dailyGoal: 10,
    progress: {},
    stats: {},
    activeSession: {
      id: "mobile-feedback-session",
      mode: "review",
      phase: "quiz",
      memoryIndex: 0,
      wordIds: ["tisch"],
      queue: [],
      completed: ["tisch"],
      weakIds: [],
      reviewMistakes: {},
      reviewStreaks: { tisch: 2 },
      answers: 2,
      correct: 2,
      elapsedSeconds: 42,
      remainingReviewCount: 0,
      updatedAt: new Date().toISOString(),
      feedback: {
        wordId: "tisch",
        correct: true,
        selected: "桌子",
        streak: 2,
        target: 2,
        completed: true,
      },
    },
  });

  await expect(page.getByText("继续上次的学习吗？", { exact: true })).toBeVisible();
  await page.getByRole("button", { name: "继续本次学习" }).click();
  await expect(page.getByText("回答正确", { exact: true })).toBeVisible();
  for (const viewport of VIEWPORTS) {
    await page.setViewportSize(viewport);
    await expectNoHorizontalOverflow(page);
  }

  await page.getByRole("button", { name: "查看学习报告" }).click();
  await expect(page.getByText("今日复习完成", { exact: true })).toBeVisible();
  for (const viewport of VIEWPORTS) {
    await page.setViewportSize(viewport);
    await expectNoHorizontalOverflow(page);
  }
  await capture(page, testInfo, "feedback-report");
});

test("并发 revision 冲突必须由用户选择本设备或云端", async ({ page }) => {
  const savedAt = "2026-07-26T09:00:00.000Z";
  const updatedAt = "2026-07-26T10:00:00.000Z";
  await openAuthenticated(
    page,
    {
      version: 2,
      dailyGoal: 20,
      progress: {},
      stats: {},
      activeSession: null,
    },
    {
      envelope: {
        revision: 1,
        dirty: true,
        savedAt,
      },
      remote: {
        state: {
          version: 3,
          activeLevel: "A1",
          dailyGoal: 5,
          progress: {},
          stats: {},
          activeSession: null,
        },
        schemaVersion: 3,
        revision: 2,
        updatedAt,
      },
    },
  );

  await expect(
    page.getByText("本设备与云端进度冲突", { exact: true }),
  ).toBeVisible();
  await expect(page.getByText("同步冲突", { exact: true })).toBeVisible();
  await page.getByRole("button", { name: "使用云端进度" }).click();
  await expect(
    page.getByText("本设备与云端进度冲突", { exact: true }),
  ).toBeHidden();
  await expect(page.getByText("已同步", { exact: true })).toBeVisible();

  await page.getByRole("tab", { name: "设置" }).click();
  await expect(page.getByRole("radio", { name: /每天 5 个/ })).toBeChecked();
});

test("无归属旧缓存只有确认后才导入且失败时不会删除", async ({ page }) => {
  await openAuthenticated(
    page,
    {
      version: 2,
      progress: {},
      stats: {},
      activeSession: null,
    },
    {
      skipUserState: true,
      globalLegacyState: {
        version: 2,
        dailyGoal: 5,
        progress: {},
        stats: {},
        activeSession: null,
      },
    },
  );

  await expect(
    page.getByText("发现未归属账号的旧学习记录", { exact: true }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "把德语，慢慢种进记忆里。" }),
  ).toBeVisible();

  await page.getByRole("button", { name: "导入当前账号" }).click();
  await expect(page.getByText("移动端验收", { exact: true })).toBeVisible();
  await expect
    .poll(() =>
      page.evaluate(() => window.localStorage.getItem("gotheword-state-v1")),
    )
    .not.toBeNull();
});
