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
    },
    reuseExistingServer: false,
    timeout: 120_000,
  },
});
