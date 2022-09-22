import { test, expect } from '@playwright/test';

// https://club.ministryoftesting.com/t/take-the-test-bash-2022-ui-challenge-closing-on-the-25th-of-september-2022/61210
test('read the message in the admin portal', async ({ page }) => {
  const randomNumber = Math.round(Math.random() * 1000000);

  await page.goto('https://automationintesting.online/');

  await page.locator('button:has-text("let me hack")').click();

  await page.locator('[data-testid="ContactName"]').fill('John Snow');

  await page.locator('[data-testid="ContactEmail"]').fill('johnny@snow.me');

  await page.locator('[data-testid="ContactPhone"]').fill('971581112233');

  await page.locator('[data-testid="ContactSubject"]').fill(`Booking request from Winterfell #${randomNumber}`);

  await page.locator('[data-testid="ContactDescription"]').fill('Winter is coming! Please accept my request ASAP!\n\nRegards,\nJS');

  await page.locator('text=Submit').click();

  await page.goto('https://automationintesting.online/#/admin');

  await page.locator('[data-testid="username"]').fill('admin');

  await page.locator('[data-testid="password"]').fill('password');

  await page.locator('[data-testid="submit"]').click();

  await page.goto('https://automationintesting.online/#/admin/messages');

  await page.locator(`text=${randomNumber}`).click();

  await expect(page.locator('text=johnny@snow.me')).toBeVisible();

  await page.locator('text=Close').click();

  // Remove the message
  const row = page.locator('.row');
  await row.locator(':scope', { hasText: randomNumber.toString() }).locator('.fa-remove').click();

  // Click text=Logout
  await page.locator('text=Logout').click();
});
