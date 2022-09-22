import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Go to https://automationintesting.online/
  await page.goto('https://automationintesting.online/');

  await page.locator('button:has-text("Let me hack")').click();

  // Fill [data-testid="ContactName"]
  await page.locator('[data-testid="ContactName"]').fill('John Snow');

  // Fill [data-testid="ContactEmail"]
  await page.locator('[data-testid="ContactEmail"]').fill('johnny@snow.me');

  const contactNumber = Math.round(new Date().getTime() / 1000);
  // Fill [data-testid="ContactPhone"]
  await page.locator('[data-testid="ContactPhone"]').fill('971581112233');

  // Fill [data-testid="ContactSubject"]
  await page.locator('[data-testid="ContactSubject"]').fill(`Booking request from Winterfell #${contactNumber}`);

  await page.locator('[data-testid="ContactDescription"]').fill('Winter is coming! Please accept my request ASAP!\n\nRegards,\nJS');

  // Click text=Submit
  await page.locator('text=Submit').click();

  // Click #collapseBanner >> text=admin panel
//   await page.locator('#collapseBanner >> text=admin panel').click();
//   await expect(page).toHaveURL('https://automationintesting.online/#/admin');
  await page.goto('https://automationintesting.online/#/admin');

  // Fill [data-testid="username"]
  await page.locator('[data-testid="username"]').fill('admin');

  // Fill [data-testid="password"]
  await page.locator('[data-testid="password"]').fill('password');

  // Click [data-testid="submit"]
  await page.locator('[data-testid="submit"]').click();

  // Click i:has-text("2")
//   await page.locator('i:has-text("2")').click();
//   await expect(page).toHaveURL('https://automationintesting.online/#/admin/messages');

  await page.goto('https://automationintesting.online/#/admin/messages');

  // Click [data-testid="message2"] >> text=John Snow
  await page.locator(`text=${contactNumber}`).click();

  await expect(page.locator('text=johnny@snow.me')).toBeVisible();

  // Click text=Close
  await page.locator('text=Close').click();

  // Remove the message
  const row = page.locator('.row');
  await row.locator(':scope', { hasText: contactNumber.toString() }).locator('.fa-remove').click();

  // Click text=Logout
  await page.locator('text=Logout').click();
//   await expect(page).toHaveURL('https://automationintesting.online/#/admin');
});