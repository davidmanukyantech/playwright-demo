import { test } from "@playwright/test";

test("locator()", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");

  await page.locator("css=input[placeholder='Username']").fill("test@test.com");

  await page
    .locator("css=form input[placeholder='Password']")
    .fill("mypassword");

  await page.locator("xpath=//button[text()='Login']").click();
});
