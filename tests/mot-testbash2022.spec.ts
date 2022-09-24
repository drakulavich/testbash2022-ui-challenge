import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Go to https://automationintesting.online/
  await page.goto('https://automationintesting.online/');

  // Click text=Let me hack!
  await page.locator('text=Let me hack!').click();

  // Click [data-testid="ContactName"]
  await page.locator('[data-testid="ContactName"]').click();

  // Fill [data-testid="ContactName"]
  await page.locator('[data-testid="ContactName"]').fill('John Show');

  // Press Tab
  await page.locator('[data-testid="ContactName"]').press('Tab');

  // Fill [data-testid="ContactEmail"]
  await page.locator('[data-testid="ContactEmail"]').fill('johnny@me.com');

  // Press Tab
  await page.locator('[data-testid="ContactEmail"]').press('Tab');

  // Fill [data-testid="ContactPhone"]
  await page.locator('[data-testid="ContactPhone"]').fill('971581112233');

  // Press Tab
  await page.locator('[data-testid="ContactPhone"]').press('Tab');

  // Fill [data-testid="ContactSubject"]
  await page.locator('[data-testid="ContactSubject"]').fill('Please accept my booking');

  // Click [data-testid="ContactDescription"]
  await page.locator('[data-testid="ContactDescription"]').click();

  // Fill [data-testid="ContactDescription"]
  await page.locator('[data-testid="ContactDescription"]').fill('Winter is coming! Please book a room for two nights ASAP!');

  // Press Enter
  await page.locator('[data-testid="ContactDescription"]').press('Enter');

  // Press Enter
  await page.locator('[data-testid="ContactDescription"]').press('Enter');

  // Fill [data-testid="ContactDescription"]
  await page.locator('[data-testid="ContactDescription"]').fill('Winter is coming! Please book a room for two nights ASAP!\n\nRegards,');

  // Press Enter
  await page.locator('[data-testid="ContactDescription"]').press('Enter');

  // Fill [data-testid="ContactDescription"]
  await page.locator('[data-testid="ContactDescription"]').fill('Winter is coming! Please book a room for two nights ASAP!\n\nRegards,\nJS');

  // Click text=Submit
  await page.locator('text=Submit').click();

  // Go to https://automationintesting.online/#/admin
  await page.goto('https://automationintesting.online/#/admin');

  // Click [data-testid="username"]
  await page.locator('[data-testid="username"]').click();

  // Fill [data-testid="username"]
  await page.locator('[data-testid="username"]').fill('admin');

  // Press Tab
  await page.locator('[data-testid="username"]').press('Tab');

  // Fill [data-testid="password"]
  await page.locator('[data-testid="password"]').fill('password');

  // Press Enter
  await page.locator('[data-testid="password"]').press('Enter');

  // Click [data-testid="submit"]
  await page.locator('[data-testid="submit"]').click();

  await page.goto('https://automationintesting.online/#/admin/messages');
  await expect(page).toHaveURL('https://automationintesting.online/#/admin/messages');

  // Click text=Please accept my booking
  await page.locator('text=Please accept my booking').last().click();

  await expect(page.locator('text=Please accept my booking').last()).toBeVisible();
  await expect(page.locator('text=John Show').last()).toBeVisible();
  await expect(page.locator('text=johnny@me.com').last()).toBeVisible();

  // Click text=Close
  await page.locator('text=Close').click();

  // Click text=Logout
  await page.locator('text=Logout').click();
  await expect(page).toHaveURL('https://automationintesting.online/#/admin');

});