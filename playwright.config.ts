import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30 * 1000,
  expect: {
    timeout: 5000,
  },
  fullyParallel: true,
  forbidOnly: !!process.env['CI'],
  retries: process.env['CI'] ? 2 : 0,
  workers: process.env['CI'] ? 1 : undefined,
  reporter: [['html', { outputFolder: 'tests/reports', open: 'never' }]],
  use: {
    baseURL: process.env['BASE_URL'] || 'http://127.0.0.1:4200',
  },
  webServer: {
    command: 'http-server ./dist/angular-portfolio-app -p 4200',
    url: process.env['BASE_URL'] || 'http://127.0.0.1:4200',
    reuseExistingServer: !process.env['CI'],
  },
  projects: [
    {
      name: 'Chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'Firefox',
      use: { ...devices['Desktop Firefox'] },
    },
  ],
});
