import { test, expect } from '@playwright/test';

const contact = {
    name: 'John Dow',
    email: 'johnny@me.com',
    phone: '971581112233',
    subject: 'Please accept my booking',
    description: 'Winter is coming! Please book a room for two nights ASAP!\n\nRegards,\nJS',
};

test('test', async ({ page }) => {
  const randomNumber = Math.floor(Math.random() * 1000000);

  await page.goto('/');

  await page.locator('text=Let me hack!').click();

  await page.locator('[data-testid="ContactName"]').click();

  await page.locator('[data-testid="ContactName"]').fill(contact.name);

  await page.locator('[data-testid="ContactEmail"]').fill(contact.email);

  await page.locator('[data-testid="ContactPhone"]').fill(contact.phone);

  await page.locator('[data-testid="ContactSubject"]').fill(`${contact.subject} #${randomNumber}`);

  await page.locator('[data-testid="ContactDescription"]').fill(contact.description);

  await page.locator('text=Submit').click();

  await page.goto('/#/admin');

  await page.locator('[data-testid="username"]').fill('admin');
  await page.locator('[data-testid="password"]').fill('password');
  await page.locator('[data-testid="submit"]').click();

  await page.goto('/#/admin/messages');

  await page.locator(`text=${randomNumber}`).click();

  for (const contactValue of Object.values(contact)) {
    await expect(page.locator(`.message-modal >> text=${contactValue}`)).toBeVisible();
  };
  await page.locator('text=Close').click();

  const row = page.locator('.row');
  await row.locator(':scope', { hasText: randomNumber.toString() }).locator('.fa-remove').click();

  await page.locator('text=Logout').click();
  await expect(page).toHaveURL('/#/admin');
});