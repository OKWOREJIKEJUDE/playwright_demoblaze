import { test, expect } from '@playwright/test';

test("Verify that a sheet appears when contact button is clicked", async({page})=>{
    await page.goto('https://demoblaze.com/index.html');

    await page.getByRole('link', { name: 'Contact' }).click();
    await page.locator("#recipient-email").fill("ejike.okwor.247590@unn.edu.ng");
    await page.locator('#recipient-name').fill("Ejike Juddy Okwor")
    await page.locator('#message-text').fill("Lorem Ipsum is the main text used foe dommytexts")
    await page.getByRole('button', { name: 'Send message' }).click();

})