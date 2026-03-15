import { Page } from '@playwright/test';

export class CheckoutInfoPage {
  constructor(private page: Page) {}

  async fillInfo(firstName: string, lastName: string, zipCode: string) {
    await this.page.getByPlaceholder('First Name').fill(firstName);
    await this.page.getByPlaceholder('Last Name').fill(lastName);
    await this.page.getByPlaceholder('Zip/Postal Code').fill(zipCode);
  }

  async continue() {
    await this.page.getByRole('button', { name: 'Continue' }).click();
  }

  async getErrorMessage() {
    return await this.page.locator('.error-message-container').textContent();
  }
}