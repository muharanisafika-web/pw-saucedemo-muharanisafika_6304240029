
const { test, expect } = require('@playwright/test');

test('Login berhasil dengan akun standard_user', async ({ page }) => {
  await page.goto('/');

  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  await expect(page).toHaveURL(/inventory/);
  await expect(page.locator('[data-test="title"]')).toHaveText('Products');
});

test('Login gagal dengan password yang salah', async ({ page }) => {
  await page.goto('/');

  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('password_salah');
  await page.locator('[data-test="login-button"]').click();

  await expect(page.locator('[data-test="error"]')).toBeVisible();
});
