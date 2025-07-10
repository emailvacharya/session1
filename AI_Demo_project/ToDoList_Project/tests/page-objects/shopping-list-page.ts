import { expect, Locator, Page } from '@playwright/test';

export class ShoppingListPage {
  readonly page: Page;
  readonly heading: Locator;
  readonly items: Locator;
  readonly addItemInput: Locator;
  readonly addItemButton: Locator;
  readonly footer: Locator;

  constructor(page: Page) {
    this.page = page;
    this.heading = page.getByRole('heading', { name: 'Create your shopping List' });
    this.items = page.locator('main [role="checkbox"]').locator('..'); // parent of checkbox
    this.addItemInput = page.getByRole('textbox', { name: 'New Item' });
    this.addItemButton = page.getByRole('button', { name: '+' });
    this.footer = page.getByRole('contentinfo');
  }

  async goto() {
    await this.page.goto('http://localhost:3002');
  }

  async getItemByName(name: string) {
    return this.page.getByText(name, { exact: true });
  }

  async addItem(name: string) {
    await this.addItemInput.fill(name);
    await this.addItemButton.click();
  }

  async editItem(name: string, newName: string) {
    const itemRow = this.page.locator('main').locator('p', { hasText: name }).locator('..');
    await itemRow.getByRole('button').filter({ has: this.page.locator('img[alt="pencil image"]') }).click();
    const editInput = itemRow.getByRole('textbox');
    await editInput.fill(newName);
    await editInput.press('Enter');
  }

  async checkItem(name: string) {
    const itemRow = this.page.locator('main').locator('p', { hasText: name }).locator('..');
    await itemRow.getByRole('checkbox').check();
  }

  async expectItemCount(count: number) {
    await expect(this.page.locator('main p')).toHaveCount(count);
  }

  async expectItemText(index: number, text: string) {
    await expect(this.page.locator('main p').nth(index)).toHaveText(text);
  }
}
