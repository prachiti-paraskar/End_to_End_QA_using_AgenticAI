import { Page } from '@playwright/test';

export class CheckoutCompletePage {
  constructor(private page: Page) {}

  async getSuccessMessage() {
    return await this.page.locator('.complete-header').textContent();
  }

  async backHome() {
    await this.page.getByRole('button', { name: 'Back Home' }).click();
  }
}