import { test, expect } from "playwright/test";

test("basic navigation test", async ({ page }) => {
  // Navigate to the home page
  await page.goto("https://selectors-practice.onrender.com/");

  await page.waitForTimeout(2000); // Wait for 2 seconds to ensure the page is fully loaded
  await page.reload(); // Reload the page to ensure all elements are present
  await page.waitForTimeout(2000); // Wait for another 2 seconds after reload

  await page.goBack(); // Navigate back to the previous page
  await page.waitForTimeout(2000); // Wait for 2 seconds to ensure the page is fully loaded

  await page.goForward(); // Navigate forward to the next page
  await page.waitForTimeout(2000); // Wait for 2 seconds to ensure the page is fully loaded

  await page.reload(); // Reload the page again
  await page.waitForTimeout(2000); // Wait for another 2 seconds after reload

  // Verify that the URL is correct after navigation
  expect(page.url()).toBe("https://selectors-practice.onrender.com/");
});
