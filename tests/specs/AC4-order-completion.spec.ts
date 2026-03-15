import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutInfoPage } from '../pages/CheckoutInfoPage';
import { CheckoutOverviewPage } from '../pages/CheckoutOverviewPage';
import { CheckoutCompletePage } from '../pages/CheckoutCompletePage';
import { testData } from '../fixtures/testData';

test.describe('AC4: Order Completion', () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);
    const checkoutInfoPage = new CheckoutInfoPage(page);
    const checkoutOverviewPage = new CheckoutOverviewPage(page);

    await loginPage.goto();
    await loginPage.login(testData.username, testData.password);
    await inventoryPage.addItemToCart('Sauce Labs Backpack');
    await inventoryPage.goToCart();
    await cartPage.checkout();
    await checkoutInfoPage.fillInfo(testData.validUser.firstName, testData.validUser.lastName, testData.validUser.zipCode);
    await checkoutInfoPage.continue();
  });

  test('Finish redirects to confirmation page @critical', async ({ page }) => {
    const checkoutOverviewPage = new CheckoutOverviewPage(page);

    await checkoutOverviewPage.finish();
    await expect(page.getByText('Checkout: Complete!')).toBeVisible();
  });

  test('Success message and back home button @critical', async ({ page }) => {
    const checkoutOverviewPage = new CheckoutOverviewPage(page);
    const checkoutCompletePage = new CheckoutCompletePage(page);

    await checkoutOverviewPage.finish();
    expect(await checkoutCompletePage.getSuccessMessage()).toContain('Thank you for your order');
    await expect(page.getByRole('button', { name: 'Back Home' })).toBeVisible();
  });
});