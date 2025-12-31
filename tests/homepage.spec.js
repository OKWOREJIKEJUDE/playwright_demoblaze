import { test, expect } from '@playwright/test';

test("Verify that user is able to scroll to the buttom of the page", async ({ page }) => {
    await page.goto('https://demoblaze.com/index.html');
    await page.waitForTimeout(2000);

    //scrol to buttom of the page
    await page.evaluate(async () => {
        const distance = 50; // pixels to scroll each step
        const delay = 50; // delay in ms between steps
        let totalHeight = 0;
        const scrollHeight = document.body.scrollHeight;

        while (totalHeight < scrollHeight) {
            window.scrollBy(0, distance);
            totalHeight += distance;
            await new Promise(resolve => setTimeout(resolve, delay));
        }
    })
})

test("Verify that user is able to adda product to cart", async ({ page }) => {
    await page.goto('https://demoblaze.com/index.html');
    await page.waitForTimeout(2000);
    await page.locator("//a[normalize-space()='Samsung galaxy s7']").click();
    await page.waitForTimeout(2000);
    await page.locator('text=Add to cart').click();
    await page.waitForTimeout(2000);
    await page.locator('#cartur').click();
    await page.waitForTimeout(3000);

    //If place Order button exist, click on it, else, click on home page
    const placeOrderButton = page.locator('button.btn.btn-success', { hasText: 'Place Order' });
    const homeLink = page.locator('a.nav-link', { hasText: 'Home' });

    if (await placeOrderButton.count() > 0) {
        await placeOrderButton.click();
    } else {
        await homeLink.click();
    }

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
})

test("Verify that user can click on item, go back a page and go forward", async ({ page }) => {
    await page.goto('https://demoblaze.com/index.html');
    // From the Homepage to the next page
    await page.locator("a:has-text('Samsung galaxy s7')").click();
    await page.waitForLoadState('load');
    await page.waitForTimeout(2000);

    // Back to homepage
    await page.goBack();
    await page.waitForLoadState('load');
    await page.waitForTimeout(2000);

    // Forward again to product page
    await page.goForward();
    await page.waitForLoadState('load');

})