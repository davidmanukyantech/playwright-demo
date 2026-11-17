import { test } from "@playwright/test";

test("Handle new tab", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");

  // Listen for new page (tab) event
  const [newPage] = await Promise.all([
    page.waitForEvent("popup"), // Wait for the new tab
    page.click("#openNewTabBtn"), // This link opens a new tab
  ]);

  // Wait for the new page to load
  await newPage.waitForLoadState("domcontentloaded");

  // Interact with the new tab
  const newTabTitle = await newPage.innerText("#newTabTitle");
  console.log("New Tab Title:", newTabTitle);

  // Switching between tabs
  page.bringToFront(); // Switch focus back to the original tab
  await page.waitForTimeout(2000);
  await newPage.bringToFront(); // Switch focus to new tab
  await newPage.waitForTimeout(2000);
  page.bringToFront();
  await page.waitForTimeout(2000);
  await newPage.bringToFront();

  // Closing tabs
  await newPage.close(); // Close the new tab
  await page.waitForTimeout(2000);
  await page.close(); // Close the original tab
});
