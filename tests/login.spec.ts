import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {
//   await page.goto('https://app.beaconcrm.org/login');

//   await page.context().clearCookies();
  
//   await page.locator('input[name="email"]').click();
//   await page.locator('input[name="email"]').fill('orboton@gmail.com');
//   await page.getByRole('button', { name: 'Continue with email' }).click();
//   await page.locator('input[name="password"]').click();
//   await page.locator('input[name="password"]').fill('Automation@123');
//   await page.getByRole('button', { name: 'Log in' }).click();
//   console.log("TEST COMPLETED")
// });

test('test', async ({ page }) => {
  await page.goto('https://www.lambdatest.com/selenium-playground/');
  await page.getByRole('link', { name: 'Simple Form Demo' }).click();
  await page.getByPlaceholder('Please enter your Message').click();
  await page.getByPlaceholder('Please enter your Message').fill('sample demo');
  await page.getByRole('button', { name: 'Get Checked Value' }).click();
  await expect(page.locator('#message')).toContainText('sample demo');
  await page.getByPlaceholder('Please enter first value').click();
  await page.getByPlaceholder('Please enter first value').fill('first value');
  await page.getByPlaceholder('Please enter second value').click();
  await page.getByPlaceholder('Please enter second value').fill('second value ');
  await page.getByRole('button', { name: 'Get Sum' }).click();
  await expect(page.locator('#addmessage')).toContainText('Entered value is not a number');
  await page.getByPlaceholder('Please enter first value').click({
    clickCount: 3
  });
  await page.getByPlaceholder('Please enter first value').fill('1000');
  await page.getByPlaceholder('Please enter second value').click();
  await page.getByPlaceholder('Please enter second value').fill('20000');
  await page.getByRole('button', { name: 'Get Sum' }).click();
  await expect(page.locator('#addmessage')).toContainText('21000');
});