import { test } from "@playwright/test";

test("getByRole()", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");
  await page.getByLabel("Email").fill("test@test.com");
  await page.getByLabel("Password").fill("password123");
});
