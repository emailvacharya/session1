import { test, expect } from '@playwright/test';
import { GroceryListPage } from './page-objects/grocery-list-page';

// Edit an existing grocery item: "Gala Apples" to "Fresh Apples"
test('Edit "Gala Apples" item to "Fresh Apples"', async ({ page }) => {
  const groceryListPage = new GroceryListPage(page);
  await groceryListPage.goto();

  // Check if "Gala Apples" item exists
  const exists = await groceryListPage.hasItem('Gala Apples');
  expect(exists).toBeTruthy();

  if (exists) {
    await groceryListPage.editItem('Gala Apples', 'Fresh Apples');
    // Check if the grocery item is updated successfully on the webpage
    await expect(groceryListPage.getListItem('Fresh Apples')).toHaveCount(1);
    await expect(groceryListPage.getListItem('Fresh Apples')).toHaveText(/Fresh Apples/);
  } else {
    throw new Error('Gala Apples item does not exist on the page.');
  }
});
   