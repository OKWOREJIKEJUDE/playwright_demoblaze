import { test, expect } from '@playwright/test';


test("Verify that user is able to click on abount us button", async ({ page }) => {
    await page.goto('https://demoblaze.com/index.html');
    await page.waitForTimeout(2000);
    await page.locator("a[data-target='#videoModal']").click();
    await page.waitForTimeout(1000);
})

test("Verify that user is able to click to play the video", async ({ page }) => {
    await page.goto('https://demoblaze.com/index.html');
    await page.waitForTimeout(2000);
    await page.locator("a[data-target='#videoModal']").click();
    await page.waitForTimeout(2000);
    //Locate the video
    const video = page.locator('#example-video_html5_api');
    //play the video
    await video.evaluate(video => video.play());
    await page.waitForTimeout(5000);
})

test("Verify that user is able to click to pause the video", async ({ page }) => {
    await page.goto('https://demoblaze.com/index.html');
    await page.waitForTimeout(2000);
    await page.locator("a[data-target='#videoModal']").click();
    await page.waitForTimeout(2000);
    //Locate the video
    const video = page.locator('#example-video_html5_api');
    //play the video
    await video.evaluate(video => video.play());
    await page.waitForTimeout(5000);
    //pause the video
    await video.evaluate(video => video.pause());
    await page.waitForTimeout(2000);

})