import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  await page.goto('https://automationintesting.online/');

  await page.locator('text=Let me hack!').click();

  await page.locator('[data-testid="ContactName"]').click();

  await page.locator('[data-testid="ContactName"]').fill('John Show');

  await page.locator('[data-testid="ContactEmail"]').fill('johnny@me.com');

  await page.locator('[data-testid="ContactPhone"]').fill('971581112233');

  await page.locator('[data-testid="ContactSubject"]').fill('Please accept my booking');

  await page.locator('[data-testid="ContactDescription"]').fill('Winter is coming! Please book a room for two nights ASAP!\n\nRegards,\nJS');

  await page.locator('text=Submit').click();

  await page.goto('https://automationintesting.online/#/admin');

  await page.locator('[data-testid="username"]').fill('admin');
  await page.locator('[data-testid="password"]').fill('password');
  await page.locator('[data-testid="submit"]').click();

  await page.goto('https://automationintesting.online/#/admin/messages');

  await page.locator('text=Please accept my booking').last().click();

  await expect(page.locator('text=Please accept my booking').last()).toBeVisible();
  await expect(page.locator('text=John Show').last()).toBeVisible();
  await expect(page.locator('text=johnny@me.com').last()).toBeVisible();

  await page.locator('text=Close').click();

  await page.locator('text=Logout').click();
  await expect(page).toHaveURL('https://automationintesting.online/#/admin');
});