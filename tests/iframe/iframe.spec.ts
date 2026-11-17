import { test, expect } from "@playwright/test";

test("Interact with iframe using frameLocator", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");

  // Create a frame locator
  const iframe = page.frameLocator("#practiceIframe");

  // Click button inside iframe
  await iframe.locator("#iframeBtn").click({ timeout: 3000 });

  // Assert
  await expect(iframe.locator("#iframeOutput")).toHaveText(
    "Button inside iframe clicked!",
  );

  // Fill input inside iframe
  await iframe.locator("#iframeInput").fill("Hello iFrame");

  // Assert
  await expect(iframe.locator("#iframeInput")).toHaveValue("Hello iFrame");
});
