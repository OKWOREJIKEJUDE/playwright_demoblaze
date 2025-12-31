import { test, expect } from '@playwright/test';

test("Verify that user is able to adda product to cart", async ({ page }) => {
    await page.goto('https://demoblaze.com/index.html');
    await page.waitForTimeout(2000);
    await page.locator("//a[normalize-space()='Samsung galaxy s7']").click();
    await page.waitForTimeout(2000);
    await page.locator('text=Add to cart').click();
    await page.waitForTimeout(2000);
    await page.locator('#cartur').click();
    await page.waitForTimeout(3000);
})

test("Verify that user is able to view products in the cart", async ({page})=>{
    await page.goto('https://demoblaze.com/index.html');
    await page.waitForTimeout(2000);
    await page.locator('#cartur').click();
    await page.waitForTimeout(3000);
})

test.only("Verify that user is able to view and click on Place Order button in the cart", async ({page})=>{
    await page.goto('https://demoblaze.com/index.html');
    await page.waitForTimeout(2000);
    await page.locator('#cartur').click();
    await page.waitForTimeout(3000);
    await page.locator('button.btn.btn-success', { hasText: 'Place Order' }).click();
    await page.waitForTimeout(2000);
    await page.locator('#name').fill('Odogwu Nwoke');
    await page.waitForTimeout(2000);
    await page.locator('#country').fill('Nigeria');
    await page.waitForTimeout(2000);
    await page.locator('#city').fill('Lagos');
    await page.waitForTimeout(2000);
    await page.locator('#card').fill('1234 5678 9012 3456');
    await page.waitForTimeout(2000);
    await page.locator('#month').fill('12');
    await page.waitForTimeout(2000);
    await page.locator('#year').fill('2026');
    await page.waitForTimeout(2000);
    await page.locator("button[onclick='purchaseOrder()']").click();
    await page.waitForTimeout(2000);
})