import { Browser, Page, chromium, expect } from "@playwright/test";
import { afterAll, beforeAll, describe, test } from "vitest";


const httpUrl = process.env.APP_HTTP_URL

describe("playwright meets vitest", () => {
    let page: Page;
    let browser: Browser;
    beforeAll(async () => {
        console.log(`httpUrl: ${httpUrl}`)
        browser = await chromium.launch();
        let context = await browser.newContext();
        page = await context.newPage();
    });

    afterAll(async () => {
        await browser.close();
    });

    test('The page should show remix string1', async () => {
        await page.goto(httpUrl!);
        await expect(page).toHaveTitle(/Remix Race Stack/);
    });
})