const fs = require("fs/promises");
const path = require("path");

const { test, expect } = require("@playwright/test");

test.describe("Input form", () => {
    test("Filling in form with lots of data works", async ({ page }) => {
        const guids = await fs.readFile(path.join(__dirname, "../data/guids_1000.txt"), { encoding : "utf-8" });
        let count = 0;

        await page.route("http://localhost:8080/test", async (route) => {
            count++;

            route.abort();
        });

        await page.goto("http://localhost:8080");
        await page.fill("textarea", guids);
        await page.click("button");

        expect(count).toEqual(1);
    });
});