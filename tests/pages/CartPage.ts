import { Page } from '@playwright/test';

export class CartPage {
  constructor(private page: Page) {}

  async getCartItems() {
    return await this.page.locator('.cart_item').all();
  }

  async getItemName(index: number) {
    return await this.page.locator('.inventory_item_name').nth(index).textContent();
  }

  async getItemPrice(index: number) {
    return await this.page.locator('.inventory_item_price').nth(index).textContent();
  }

  async getTotalPrice() {
    return await this.page.locator('.summary_total_label').textContent();
  }

  async checkout() {
    await this.page.getByRole('button', { name: 'Checkout' }).click();
  }

  async continueShopping() {
    await this.page.getByRole('button', { name: 'Continue Shopping' }).click();
  }
}