import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { testData } from '../fixtures/testData';

test.describe('AC1: Cart Review', () => {
  test('Cart Review @critical @smoke', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);

    // 1. Login to the application
    await loginPage.goto();
    await loginPage.login(testData.username, testData.password);

    // 2. Add items to the cart
    await inventoryPage.addItemToCart('Sauce Labs Backpack');
    await inventoryPage.addItemToCart('Sauce Labs Bike Light');

    // 3. Go to the cart
    await inventoryPage.goToCart();

    // 4. Verify that the cart page displays all added items with details
    const items = await cartPage.getCartItems();
    expect(items.length).toBe(2);
    expect(await cartPage.getItemName(0)).toBe('Sauce Labs Backpack');
    expect(await cartPage.getItemPrice(0)).toBe('$29.99');
    expect(await cartPage.getItemName(1)).toBe('Sauce Labs Bike Light');
    expect(await cartPage.getItemPrice(1)).toBe('$9.99');

    // 5. Verify total price
    const price1 = parseFloat((await cartPage.getItemPrice(0)).replace('$', ''));
    const price2 = parseFloat((await cartPage.getItemPrice(1)).replace('$', ''));
    expect(price1 + price2).toBe(39.98);

    // 6. Verify options to continue shopping or checkout
    await expect(page.getByRole('button', { name: 'Continue Shopping' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Checkout' })).toBeVisible();
  });
});