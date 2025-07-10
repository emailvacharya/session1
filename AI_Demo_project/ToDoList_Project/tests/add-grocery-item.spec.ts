import { test, expect } from '@playwright/test';
import { GroceryListPage } from './page-objects/grocery-list-page';

// Test data
const GROCERY_ITEM = 'Test Grocery Item';

test.describe('Add Grocery Item', () => {
  test('should add a new grocery item to the list', async ({ page }) => {
    const groceryListPage = new GroceryListPage(page);

    // Step 1: Browse to the application
    await groceryListPage.goto();

    // Step 2: Input a new grocery item (using role-based locator for textbox)
    await groceryListPage.addItem(GROCERY_ITEM);

    // Assert the item is saved and visible in the list
    await expect(groceryListPage.getListItem(GROCERY_ITEM)).toHaveCount(1);
    await expect(groceryListPage.getListItem(GROCERY_ITEM)).toHaveText(new RegExp(GROCERY_ITEM));
  });
});

