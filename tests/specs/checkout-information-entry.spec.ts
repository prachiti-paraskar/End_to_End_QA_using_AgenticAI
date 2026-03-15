// spec: specs/plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutInfoPage } from '../pages/CheckoutInfoPage';
import { testData } from '../fixtures/testData';

test.describe('Checkout Information Entry', () => {
  test('Checkout Information Entry @critical', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);
    const checkoutInfoPage = new CheckoutInfoPage(page);

    // 1. Navigate to login page
    await loginPage.goto();

    // 2. Enter username
    // 3. Enter password
    // 4. Click login button
    await loginPage.login(testData.username, testData.password);

    // 5. Verify login successful, on inventory page
    await expect(page.getByText('Products')).toBeVisible();

    // 6. Add an item to cart (click add to cart button)
    await inventoryPage.addItemToCart('Sauce Labs Backpack');

    // 7. Click cart icon
    await inventoryPage.goToCart();

    // 8. Verify on cart page
    await expect(page.getByText('Your Cart')).toBeVisible();

    // 9. Click checkout button
    await cartPage.checkout();

    // 10. Verify redirected to checkout info page
    await expect(page.getByText('Checkout: Your Information')).toBeVisible();

    // 11. Verify first name field is present
    await expect(page.getByRole('textbox', { name: 'First Name' })).toBeVisible();

    // 12. Verify last name field is present
    await expect(page.getByRole('textbox', { name: 'Last Name' })).toBeVisible();

    // 13. Verify zip code field is present
    await expect(page.getByRole('textbox', { name: 'Zip/Postal Code' })).toBeVisible();

    // 14. Click continue button without filling fields
    await checkoutInfoPage.continue();

    // 15. Verify error message for first name
    await expect(page.getByText('Error: First Name is required')).toBeVisible();

    // 18. Fill first name
    await page.locator('[data-test="firstName"]').fill('John');

    // 19. Fill last name
    await page.locator('[data-test="lastName"]').fill('Doe');

    // 20. Fill zip code
    await page.locator('[data-test="postalCode"]').fill('12345');

    // 21. Click continue
    await checkoutInfoPage.continue();

    // 22. Verify proceeds to checkout overview page
    await expect(page.getByText('Checkout: Overview')).toBeVisible();
  });
});