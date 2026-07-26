import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  outputDir: "output/playwright/test-results",
  fullyParallel: false,
  retries: 0,
  reporter: [["list"], ["html", { outputFolder: "output/playwright/report", open: "never" }]],
  use: {
    baseURL: "http://localhost:4173",
    trace: "retain-on-failure",
  },
  projects: [
    {
      name: "chromium-mobile",
      use: {
        browserName: "chromium",
        viewport: { width: 320, height: 720 },
      },
    },
    {
      name: "webkit-mobile",
      use: {
        browserName: "webkit",
        viewport: { width: 390, height: 844 },
      },
    },
  ],
  webServer: {
    command: "npm run dev -- --port 4173",
    url: "http://localhost:4173",
    env: {
      NEXT_PUBLIC_SUPABASE_URL: "https://mobile-test.supabase.co",
      NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY: "mobile-test-publishable-key",
      NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN: "phc_playwright_only",
      NEXT_PUBLIC_POSTHOG_HOST: "http://localhost:4173/__posthog",
      NEXT_PUBLIC_ANALYTICS_TEST_MODE: "true",
      NEXT_PUBLIC_APP_VERSION: "playwright",
      NEXT_PUBLIC_RELEASE_SHA: "playwright",
      NEXT_PUBLIC_DEPLOYMENT_ENV: "local",
      NEXT_PUBLIC_SITES_VERSION: "playwright",
      NEXT_PUBLIC_SUPABASE_MIGRATION: "playwright",
    },
    reuseExistingServer: false,
    timeout: 120_000,
  },
});
