import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests/api',
  timeout: 30000,
  retries: 2,
  use: {
    baseURL: 'https://reqres.in/api',
    extraHTTPHeaders: {
      'Content-Type': 'application/json',
    },
  },
});


