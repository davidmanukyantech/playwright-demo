import { test, expect } from "@playwright/test";

test("Download a single file", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");

  // Listen for download
  const [download] = await Promise.all([
    page.waitForEvent("download", { timeout: 10000 }), // Wait for download to start
    page.click("#singleDownloadBtn", { timeout: 5000 }), // Click triggers download
  ]);

  // Save downloaded file
  await download.saveAs("downloads/myFile.txt");

  // Verify download
  await expect(page.locator("#singleDownloadOutput")).toHaveText(
    "Single file download initiated!",
  );
});
