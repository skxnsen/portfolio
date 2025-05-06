import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30 * 1000,
  expect: { timeout: 5000 },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [['html', { outputFolder: 'playwright-report', open: 'never' }]],
  use: {
    // Use the BASE_URL environment variable (e.g., https://skansen.netlify.app/)
    baseURL: process.env.BASE_URL || 'http://localhost:4200',
    trace: 'on-first-retry',
  },
  webServer: {
    // Command to run the local server only if no BASE_URL is provided
    command: 'npx serve -s ./dist/angular-portfolio-app/browser -l 4200',
    url: 'http://localhost:4200', // Default local URL
    reuseExistingServer: !process.env.CI && !process.env.BASE_URL, // Avoid starting the server when BASE_URL is set
    timeout: 180 * 1000, // 3 minutes
    stdout: 'pipe',
    stderr: 'pipe',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
  ],
});
