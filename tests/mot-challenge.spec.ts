import { test, expect } from '@playwright/test';

const contact = {
  name: 'John Snow',
  email: 'johnny@snow.me',
  phone: '971581112233',
  subject: 'Booking request from Winterfell',
  message: 'Winter is coming! Please accept my request ASAP!\n\nRegards,\nJS',
};

// https://club.ministryoftesting.com/t/take-the-test-bash-2022-ui-challenge-closing-on-the-25th-of-september-2022/61210
test('read the message in the admin portal', async ({ page }) => {
  const randomNumber = Math.round(Math.random() * 1000000);

  await page.goto('https://automationintesting.online/');

  await page.locator('button:has-text("let me hack")').click();

  await page.locator('[data-testid="ContactName"]').fill(contact.name);

  await page.locator('[data-testid="ContactEmail"]').fill(contact.email);

  await page.locator('[data-testid="ContactPhone"]').fill(contact.phone);

  await page.locator('[data-testid="ContactSubject"]').fill(`${contact.subject} #${randomNumber}`);

  await page.locator('[data-testid="ContactDescription"]').fill(contact.message);

  await page.locator('text=Submit').click();

  await page.goto('https://automationintesting.online/#/admin');

  await page.locator('[data-testid="username"]').fill('admin');
  await page.locator('[data-testid="password"]').fill('password');
  await page.locator('[data-testid="submit"]').click();

  await page.goto('https://automationintesting.online/#/admin/messages');

  await page.locator(`text=${randomNumber}`).click();
  for (const contactValue of Object.values(contact)) {
    await expect(page.locator(`text=${contactValue}`).first()).toBeVisible();
  };
  await page.locator('text=Close').click();

  // Remove the message
  const row = page.locator('.row');
  await row.locator(':scope', { hasText: randomNumber.toString() }).locator('.fa-remove').click();

  // Click text=Logout
  await page.locator('text=Logout').click();
});
