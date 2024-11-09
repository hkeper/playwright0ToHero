import {test} from "@playwright/test"

test.beforeEach( async ({page}) => {
    await page.goto('https://qaplayground.dev');
})

test('the first test', async ({page}) => {    
    await page.locator("xpath=//a[contains(@class,'card-course')]").first().click();
})