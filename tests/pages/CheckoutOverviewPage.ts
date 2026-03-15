import { Page } from '@playwright/test';

export class CheckoutOverviewPage {
  constructor(private page: Page) {}

  async getItemNames() {
    return await this.page.locator('.inventory_item_name').allTextContents();
  }

  async getSubtotal() {
    return await this.page.locator('.summary_subtotal_label').textContent();
  }

  async getTax() {
    return await this.page.locator('.summary_tax_label').textContent();
  }

  async getTotal() {
    return await this.page.locator('.summary_total_label').textContent();
  }

  async finish() {
    await this.page.getByRole('button', { name: 'Finish' }).click();
  }

  async cancel() {
    await this.page.getByRole('button', { name: 'Cancel' }).click();
  }
}