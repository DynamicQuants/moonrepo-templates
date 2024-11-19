import { test, expect } from '@playwright/test';

test.describe('Root page', () => {
  test('should reach the home page', async ({ page }) => {
    const response = await page.request.get('/');
    await expect(response).toBeOK();
  });

  test('should have a heading and the paragraph', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
    await expect(page.getByRole('heading', { level: 1 })).toHaveText('Hello World!');
    await expect(page.getByRole('paragraph')).toBeVisible();
    await expect(page.getByRole('paragraph')).toHaveText('Welcome to your new Next.js app.');
  });
});
