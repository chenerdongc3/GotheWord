import { expect, test, type Page } from "@playwright/test";

const USER_ID = "00000000-0000-4000-8000-000000000012";
const AUTH_KEY = "sb-mobile-test-auth-token";
const STATE_KEY = `gotheword-state-v2:${USER_ID}`;

type CapturedEvent = {
  event: string;
  properties: Record<string, unknown>;
};

function createAccessToken() {
  const encode = (value: unknown) =>
    Buffer.from(JSON.stringify(value)).toString("base64url");
  return [
    encode({ alg: "HS256", typ: "JWT" }),
    encode({
      aud: "authenticated",
      exp: Math.floor(Date.now() / 1_000) + 3_600,
      role: "authenticated",
      sub: USER_ID,
    }),
    "analytics-test-signature",
  ].join(".");
}

async function capturedEvents(page: Page) {
  return page.evaluate(
    () =>
      (
        window as typeof window & {
          __GOTHEWORD_ANALYTICS_TEST_EVENTS__?: CapturedEvent[];
        }
      ).__GOTHEWORD_ANALYTICS_TEST_EVENTS__ ?? [],
  );
}

async function openAuthenticated(page: Page) {
  const accessToken = createAccessToken();
  const now = new Date().toISOString();
  await page.route("**/rest/v1/**", (route) =>
    route.fulfill({
      status: 401,
      contentType: "application/json",
      body: JSON.stringify({
        code: "PGRST301",
        message: "analytics test forces a deterministic sync failure",
      }),
    }),
  );
  await page.addInitScript(
    ({ authKey, stateKey, token, userId, createdAt }) => {
      Object.defineProperty(navigator, "doNotTrack", {
        configurable: true,
        value: "0",
      });
      Object.defineProperty(window, "doNotTrack", {
        configurable: true,
        value: "0",
      });
      window.localStorage.setItem(
        authKey,
        JSON.stringify({
          access_token: token,
          refresh_token: "analytics-test-refresh-token",
          expires_in: 3_600,
          expires_at: Math.floor(Date.now() / 1_000) + 3_600,
          token_type: "bearer",
          user: {
            id: userId,
            aud: "authenticated",
            role: "authenticated",
            email: "analytics-test@users.gotheword.local",
            app_metadata: { provider: "email", providers: ["email"] },
            user_metadata: { username: "不会进入事件" },
            identities: [],
            created_at: createdAt,
          },
        }),
      );
      window.localStorage.setItem(
        stateKey,
        JSON.stringify({
          version: 2,
          progress: {},
          stats: {},
          activeSession: null,
        }),
      );
    },
    {
      authKey: AUTH_KEY,
      stateKey: STATE_KEY,
      token: accessToken,
      userId: USER_ID,
      createdAt: now,
    },
  );
  await page.goto("/");
}

test("关键事件恰好一次且 mock transport 中没有 PII", async ({ page }) => {
  await openAuthenticated(page);
  expect(
    await page.evaluate(async () => {
      const analytics = await import("../app/analytics");
      return {
        configured: analytics.isAnalyticsConfigured(),
        doNotTrack: navigator.doNotTrack,
      };
    }),
  ).toEqual({
    configured: true,
    doNotTrack: "0",
  });
  await expect(
    page.getByRole("heading", { name: "把德语，慢慢种进记忆里。" }),
  ).toBeVisible();
  await expect(page.getByText("同步失败", { exact: true })).toBeVisible();
  await page.getByRole("button", { name: "开始我的德语旅程" }).click();
  await expect(page.getByRole("tab", { name: "今日学习" })).toBeVisible();
  await page.getByRole("button", { name: "学习新单词" }).click();

  await expect
    .poll(async () =>
      (await capturedEvents(page)).filter(
        (item) => item.event === "learning_session_started",
      ).length,
    )
    .toBe(1);
  await expect
    .poll(async () =>
      (await capturedEvents(page)).some(
        (item) => item.event === "learning_state_sync_result",
      ),
    )
    .toBe(true);

  const captured = await capturedEvents(page);
  expect(captured.filter((item) => item.event === "onboarding_completed")).toHaveLength(1);
  expect(captured.filter((item) => item.event === "learning_session_started")).toHaveLength(1);
  expect(captured.filter((item) => item.event === "login_completed")).toHaveLength(0);
  expect(captured.some((item) => item.event === "learning_state_sync_result")).toBe(true);

  const serialized = JSON.stringify(captured);
  for (const forbidden of [
    "不会进入事件",
    "analytics-test@users.gotheword.local",
    "analytics-test-refresh-token",
    "selected_answer",
    "raw_error",
    "\"state\":",
  ]) {
    expect(serialized).not.toContain(forbidden);
  }
  expect(serialized).toContain("\"release_sha\":\"playwright\"");
  expect(serialized).toContain("\"sites_version\":\"playwright\"");
  expect(serialized).toContain("\"supabase_migration\":\"playwright\"");
  expect(serialized).toContain("\"$geoip_disable\":true");
});
