import { expect, test } from '@playwright/test';
import { v4 as uuidv4 } from 'uuid';

test('signup and signin', async ({ page }) => {
  let email = 'test-' + uuidv4() + '@test.com'
  let password = "gjhg$*^!@12AS" // process.env.TEST_USER_PASSWORD!
  await page.goto(process.env.APP_HTTP_URL!);
  await page.getByRole('link', { name: 'Sign up' }).click();
  await page.getByPlaceholder('name@example.com').click();
  await page.getByPlaceholder('name@example.com').fill(email);
  await page.getByLabel('Password', { exact: true }).click();
  await page.getByLabel('Password', { exact: true }).fill(password);
  await page.getByLabel('Confirm Password').click();
  await page.getByLabel('Confirm Password').fill(password);
  await page.getByRole('button', { name: 'Sign Up with Email' }).click();
  await page.waitForLoadState('networkidle');
  await page.locator("#email").click();
  await page.locator("#email").fill(email);
  await page.locator("#password").click();
  await page.locator("#password").fill(password)
  await page.getByRole('button', { name: 'Sign In with Email' }).click();
  await page.waitForLoadState('networkidle');
  await expect(page.getByLabel('Select a team')).toBeVisible();
});

