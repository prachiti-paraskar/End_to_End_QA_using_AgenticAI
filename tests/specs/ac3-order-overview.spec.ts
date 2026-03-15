import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutInfoPage } from '../pages/CheckoutInfoPage';
import { CheckoutOverviewPage } from '../pages/CheckoutOverviewPage';
import { testData } from '../fixtures/testData';

test.describe('AC3: Order Overview', () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);
    const checkoutInfoPage = new CheckoutInfoPage(page);

    await page.goto('https://www.saucedemo.com');
    await loginPage.login(testData.username, testData.password);
    await inventoryPage.addItemToCart('Sauce Labs Backpack');
    await inventoryPage.goToCart();
    await cartPage.checkout();
    await checkoutInfoPage.fillInfo(testData.validUser.firstName, testData.validUser.lastName, testData.validUser.zipCode);
    await checkoutInfoPage.continue();
  });

  test('Verify Order Overview @critical', async ({ page }) => {
    const checkoutOverviewPage = new CheckoutOverviewPage(page);

    // 7. Verify order summary is displayed
    const items = await checkoutOverviewPage.getItemNames();
    expect(items).toContain('Sauce Labs Backpack');

    // 8. Verify payment information is shown
    await expect(page.getByText('SauceCard #31337')).toBeVisible();

    // 9. Verify shipping information is shown
    await expect(page.getByText('Free Pony Express Delivery!')).toBeVisible();

    // 10. Verify subtotal is calculated
    expect(await checkoutOverviewPage.getSubtotal()).toBe('Item total: $29.99');

    // 11. Verify tax is calculated
    expect(await checkoutOverviewPage.getTax()).toBe('Tax: $2.40');

    // 12. Verify total is calculated
    expect(await checkoutOverviewPage.getTotal()).toBe('Total: $32.39');

    // 13. Verify cancel button is present
    await expect(page.getByRole('button', { name: 'Cancel' })).toBeVisible();

    // 14. Verify finish button is present
    await expect(page.getByRole('button', { name: 'Finish' })).toBeVisible();
  });
});