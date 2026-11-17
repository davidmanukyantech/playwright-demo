import { test } from "@playwright/test";

test("Filling & Typing", { tag: "@smoke" }, async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");

  // Filling Input Field
  await page.fill("#username", "myUsername");

  // Same thing line 7 and 11

  await page.locator("#username").fill("myUsername");

  // Typing Input Field
  await page
    .locator("#email")
    .pressSequentially("qa@tester.com", { delay: 100 });
});
