import { test, expect } from '@playwright/test';
import path from 'path';
import { GroceryListPage } from './page-objects/grocery-list-page';

test('Delete "Gala Apples" item from the grocery list', async ({ page }) => {
  const groceryListPage = new GroceryListPage(page);
  await groceryListPage.goto();

  // Check if "Gala Apples" item exists
  const exists = await groceryListPage.hasItem('Gala Apples');
  expect(exists).toBeTruthy();

  if (exists) {
    await groceryListPage.deleteItem('Gala Apples');
  }

  await expect(groceryListPage.getListItem('Gala Apples')).toHaveCount(0);

  // Take a screenshot and save it under playwright-report
  const screenshotPath = path.join('playwright-report', 'delete-gala-apples.png');
  await page.screenshot({ path: screenshotPath, fullPage: true });
});

