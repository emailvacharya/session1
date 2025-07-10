import { test, expect } from '@playwright/test';
import { ShoppingListPage } from './page-objects/shopping-list-page';

test.describe('Shopping List App', () => {
  test('should display initial items and add, edit, check, and count items', async ({ page }) => {
    const shoppingList = new ShoppingListPage(page);
    await shoppingList.goto();

    // Assert heading
    await expect(shoppingList.heading).toBeVisible();

    // Assert initial items
    await shoppingList.expectItemCount(3);
    await shoppingList.expectItemText(0, 'Fresh Oranges');
    await shoppingList.expectItemText(1, 'Gala Apples');
    await shoppingList.expectItemText(2, 'Milk');

    // Add a new item
    await shoppingList.addItem('Bananas');
    await shoppingList.expectItemCount(4);
    await shoppingList.expectItemText(3, 'Bananas');

    // Edit an item
    await shoppingList.editItem('Bananas', 'Organic Bananas');
    await shoppingList.expectItemText(3, 'Organic Bananas');

    // Check an item
    await shoppingList.checkItem('Organic Bananas');
    // Find the checkbox for the edited item and assert it's checked
    const itemRow = shoppingList.page.locator('main').locator('p', { hasText: 'Organic Bananas' }).locator('..');
    const checkbox = itemRow.getByRole('checkbox');
    await expect(checkbox).toBeChecked();
  });
});
