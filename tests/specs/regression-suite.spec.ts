import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutInfoPage } from '../pages/CheckoutInfoPage';
import { CheckoutOverviewPage } from '../pages/CheckoutOverviewPage';
import { CheckoutCompletePage } from '../pages/CheckoutCompletePage';
import { testData } from '../fixtures/testData';

test.describe('Regression Suite', () => {
  test('Full checkout flow @regression @smoke', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);
    const checkoutInfoPage = new CheckoutInfoPage(page);
    const checkoutOverviewPage = new CheckoutOverviewPage(page);
    const checkoutCompletePage = new CheckoutCompletePage(page);

    // Login
    await loginPage.goto();
    await loginPage.login(testData.username, testData.password);

    // Add item
    await inventoryPage.addItemToCart('Sauce Labs Backpack');
    await inventoryPage.goToCart();

    // Cart review
    const items = await cartPage.getCartItems();
    expect(items.length).toBe(1);

    // Checkout
    await cartPage.checkout();

    // Info
    await checkoutInfoPage.fillInfo(testData.validUser.firstName, testData.validUser.lastName, testData.validUser.zipCode);
    await checkoutInfoPage.continue();

    // Overview
    const itemNames = await checkoutOverviewPage.getItemNames();
    expect(itemNames).toContain('Sauce Labs Backpack');

    // Finish
    await checkoutOverviewPage.finish();

    // Complete
    expect(await checkoutCompletePage.getSuccessMessage()).toContain('Thank you');
  });
});