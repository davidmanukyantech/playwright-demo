import { test, expect } from "@playwright/test";

test("handle new tab navigation", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");

  await page.waitForTimeout(2000); // Wait for 2 seconds to ensure the page is fully loaded

  const [newPage] = await Promise.all([
    page.waitForEvent("popup"), // Wait for the new tab to open
    page.click("#openNewTabBtn"), // Click on the link that opens a new tab
  ]);

  await newPage.waitForLoadState("domcontentloaded"); // Wait for the new tab to load completely
  const newPageTitle = await newPage.title(); // Get the title of the new tab
  expect(newPageTitle).toBe("New Tab Page"); // Verify the title of the new tab

  const heading = await newPage.locator("h1").textContent(); // Get the heading of the new tab
  expect(heading).toBe("Welcome to the New Tab!"); // Verify the heading of the new tab

  await newPage.close(); // Close the new tab
});
