import { test, expect } from '@playwright/test';

test("Verify that a sheet appears when contact button is clicked", async({page})=>{
    await page.goto('https://demoblaze.com/index.html');

})