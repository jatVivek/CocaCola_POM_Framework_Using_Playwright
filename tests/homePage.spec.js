import { test, expect } from "@playwright/test";
import HomePage from "../Pages/HomePage";

test.describe("Home Page Testcases", () => {
    test("Test Case 01 - Verify homepage loads successfully", async ({ page }) => {
        const homePage = new HomePage(page);
        await homePage.navigate('https://www.coca-cola.com/in/en');
        await homePage.verifyingHomePageContent();
    });
    test("Test Case 2 - Verify Navigation of Brand Button", async ({page})=>{
        const homePage = new HomePage();
        await homePage.verifyBrandsNavigation();
    })
});
