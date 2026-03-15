import { Page } from '@playwright/test';

export class InventoryPage {
  constructor(private page: Page) {}

  async addItemToCart(itemName: string) {
    await this.page.locator('.inventory_item').filter({ hasText: itemName }).getByRole('button', { name: 'Add to cart' }).click();
  }

  async goToCart() {
    await this.page.locator('.shopping_cart_link').click();
  }

  async getCartBadgeCount() {
    return await this.page.locator('.shopping_cart_badge').textContent();
  }
}