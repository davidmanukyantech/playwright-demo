import { test } from "@playwright/test";

test("Hover Action", { tag: "@smoke" }, async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");

  // Scroll to Hover section
  await page.locator("//h2[text()='Hover Menu']").scrollIntoViewIfNeeded();

  // Hover over the element
  await page.hover("div.menu");

  // Wait for 2 seconds to observe the change
  await page.waitForTimeout(2000);

  // Click on the revealed submenu item
  await page.click("#submenuItem");

  // Move mouse away to hide submenu
  await page.mouse.move(0, 0);
});
