import { test, expect } from '@playwright/test';

test("Verify that user can successful Login and verify logout button Icon is displayed)", async ({ page }) => {
    await page.goto("https://demoblaze.com/index.html");
    await page.waitForTimeout(2000);
    await page.click('#login2');
    await page.waitForTimeout(2000);
    await page.locator('#loginusername').fill("Ejike")
    await page.waitForTimeout(2000);
    await page.locator('#loginpassword').fill("Ejike1980")
    await page.waitForTimeout(2000);
    await page.click("//button[normalize-space()='Log in']")
    await page.waitForTimeout(2000);

    const logout_link = await page.locator("#logout2")
    await expect(logout_link).toBeVisible()
    await page.close()
})

test("Verify that the close button should close the banner after its opened", async ({ page }) => {
    await page.goto("https://demoblaze.com/index.html");
    await page.waitForTimeout(2000);
    await page.click('#login2');
    await page.waitForTimeout(2000);
    await page.locator("//div[@id='logInModal']//button[@type='button'][normalize-space()='Close']").click();
})

test("Verify that the close X icon should close the banner after its opened", async ({ page }) => {
    await page.goto("https://demoblaze.com/index.html");
    await page.waitForTimeout(2000);
    await page.click('#login2');
    await page.waitForTimeout(2000);
    await page.locator("div[id='logInModal'] span[aria-hidden='true']").click();
})

test("Verify that user should not be allowed to login when fields are empty", async ({ page }) => {
    await page.goto("https://demoblaze.com/index.html");
    await page.waitForTimeout(2000);
    await page.click('#login2');
    await page.waitForTimeout(2000);
    await page.click("//button[normalize-space()='Log in']")
    await page.waitForTimeout(2000);
})

test("Verify that user should not login with incorrect username and password)", async ({ page }) => {
    await page.goto("https://demoblaze.com/index.html");
    await page.waitForTimeout(2000);
    await page.click('#login2');
    await page.waitForTimeout(2000);
    await page.locator('#loginusername').fill("Llllloolllll")
    await page.waitForTimeout(2000);
    await page.locator('#loginpassword').fill("0000000____0000")
    await page.waitForTimeout(2000);
    await page.click("//button[normalize-space()='Log in']")
    await page.waitForTimeout(2000);
})