import { test } from "@playwright/test";

test("Dropdowns", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");

  // scroll to Dropdown section
  await page.locator("#dropdownMenu").scrollIntoViewIfNeeded();

  // Select Blue from Dropdown
  await page.selectOption("#dropdownMenu", "Blue");

  // Wait for 2 seconds to observe the change
  await page.waitForTimeout(2000);

  // Select Red from Dropdown
  await page.selectOption("#dropdownMenu", "Red");

  // Wait for 2 seconds to observe the change
  await page.waitForTimeout(2000);

  // Select Green from Dropdown
  await page.selectOption("#dropdownMenu", "Green");

  // Wait for 2 seconds to observe the change
  await page.waitForTimeout(2000);
});
