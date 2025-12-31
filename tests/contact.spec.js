import { test, expect } from '@playwright/test';


test("Verify that a sheet appears when contact button is clicked", async ({ page }) => {
    await page.goto('https://demoblaze.com/index.html');
})

test("Verify that user is able to enter message in empty fields and click on send message button", async ({ page }) => {
    await page.goto('https://demoblaze.com/index.html');
    await page.waitForTimeout(2000);
    await page.getByRole('link', { name: 'Contact' }).click();
    await page.waitForTimeout(2000);
    await page.locator("#recipient-email").fill("ejike.okwor.247590@unn.edu.ng");
    await page.waitForTimeout(2000);
    await page.locator('#recipient-name').fill("Ejike Juddy Okwor")
    await page.waitForTimeout(2000);
    await page.locator('#message-text').fill("Lorem Ipsum is the main text used foe dommytexts")
    await page.waitForTimeout(2000);
    await page.getByRole('button', { name: 'Send message' }).click();
})

test("Verify that user is able to cancel pop-up with close button", async ({ page }) => {
    await page.goto('https://demoblaze.com/index.html');
    await page.waitForTimeout(2000);
    await page.getByRole('link', { name: 'Contact' }).click();
    await page.waitForTimeout(2000);
    await page.locator("//div[@id='exampleModal']//button[@type='button'][normalize-space()='Close']").click();
})

test("Verify that user is able to cancel pop-up with X icon", async ({ page }) => {
    await page.goto('https://demoblaze.com/index.html');
    await page.waitForTimeout(2000);
    await page.getByRole('link', { name: 'Contact' }).click();
    await page.waitForTimeout(2000);
    await page.locator("//div[@id='exampleModal']//span[@aria-hidden='true'][normalize-space()='×']").click();
})
