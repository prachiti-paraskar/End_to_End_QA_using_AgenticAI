import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutInfoPage } from '../pages/CheckoutInfoPage';
import { testData } from '../fixtures/testData';

test.describe('AC2: Checkout Information Entry', () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);

    await loginPage.goto();
    await loginPage.login(testData.username, testData.password);
    await inventoryPage.addItemToCart('Sauce Labs Backpack');
    await inventoryPage.goToCart();
  });

  test('Checkout button redirects to info page @critical', async ({ page }) => {
    const cartPage = new CartPage(page);

    await cartPage.checkout();
    await expect(page.getByText('Checkout: Your Information')).toBeVisible();
  });

  test('Form fields are present and mandatory @critical', async ({ page }) => {
    const cartPage = new CartPage(page);
    const checkoutInfoPage = new CheckoutInfoPage(page);

    await cartPage.checkout();
    await expect(page.getByPlaceholder('First Name')).toBeVisible();
    await expect(page.getByPlaceholder('Last Name')).toBeVisible();
    await expect(page.getByPlaceholder('Zip/Postal Code')).toBeVisible();

    await checkoutInfoPage.continue();
    expect(await checkoutInfoPage.getErrorMessage()).toContain('First Name is required');
  });

  test('Error message for empty first name @critical', async ({ page }) => {
    const cartPage = new CartPage(page);
    const checkoutInfoPage = new CheckoutInfoPage(page);

    await cartPage.checkout();
    await checkoutInfoPage.fillInfo('', 'Doe', '12345');
    await checkoutInfoPage.continue();
    expect(await checkoutInfoPage.getErrorMessage()).toContain('First Name is required');
  });

  test('Error message for empty last name @critical', async ({ page }) => {
    const cartPage = new CartPage(page);
    const checkoutInfoPage = new CheckoutInfoPage(page);

    await cartPage.checkout();
    await checkoutInfoPage.fillInfo('John', '', '12345');
    await checkoutInfoPage.continue();
    expect(await checkoutInfoPage.getErrorMessage()).toContain('Last Name is required');
  });

  test('Error message for empty zip code @critical', async ({ page }) => {
    const cartPage = new CartPage(page);
    const checkoutInfoPage = new CheckoutInfoPage(page);

    await cartPage.checkout();
    await checkoutInfoPage.fillInfo('John', 'Doe', '');
    await checkoutInfoPage.continue();
    expect(await checkoutInfoPage.getErrorMessage()).toContain('Postal Code is required');
  });
});