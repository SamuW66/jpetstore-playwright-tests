const { test, expect } = require('@playwright/test');

test('Navegar a Fish', async ({ page }) => {
  await page.goto('https://petstore.octoperf.com/actions/Catalog.action');
  await page.click('text=Enter the Store');
  await page.click('text=Fish');
  await expect(page.locator('h2')).toContainText('Fish');
  console.log('OK - Llegamos a Fish');
});

test('Agregar al carrito', async ({ page }) => {
  await page.goto('https://petstore.octoperf.com/actions/Catalog.action');
  await page.click('text=Enter the Store');
  await page.click('text=Fish');
  await page.click('text=FI-SW-01');
  await page.click('text=Add to Cart');
  await expect(page.locator('h2')).toContainText('Shopping Cart');
  console.log('OK - Producto en carrito');
});