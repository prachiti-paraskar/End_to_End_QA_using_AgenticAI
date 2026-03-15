import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutInfoPage } from '../pages/CheckoutInfoPage';
import { testData } from '../fixtures/testData';

test.describe('AC5: Error Handling', () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);

    await loginPage.goto();
    await loginPage.login(testData.username, testData.password);
    await inventoryPage.addItemToCart('Sauce Labs Backpack');
    await inventoryPage.goToCart();
    await cartPage.checkout();
  });

  test.fixme('SauceDemo does not validate special characters in names', async ({ page }) => {
    const checkoutInfoPage = new CheckoutInfoPage(page);

    await checkoutInfoPage.fillInfo('@#$%', 'Doe', '12345');
    await checkoutInfoPage.continue();
    const error = await checkoutInfoPage.getErrorMessage();
    expect(error).toBeTruthy();
  });

  test.fixme('SauceDemo does not validate zip code format, only emptiness', async ({ page }) => {
    const checkoutInfoPage = new CheckoutInfoPage(page);

    await checkoutInfoPage.fillInfo('John', 'Doe', 'abc');
    await checkoutInfoPage.continue();
    const error = await checkoutInfoPage.getErrorMessage();
    expect(error).toBeTruthy();
  });

  test('Cannot proceed with invalid fields @high', async ({ page }) => {
    const checkoutInfoPage = new CheckoutInfoPage(page);

    await checkoutInfoPage.fillInfo('', '', '');
    await checkoutInfoPage.continue();
    await expect(page.getByText('Checkout: Your Information')).toBeVisible(); // Still on page
  });
});