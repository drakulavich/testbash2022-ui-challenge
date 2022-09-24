import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Click [data-testid="DeleteMessage3"]
  await page.locator('.fa-remove').click();

});