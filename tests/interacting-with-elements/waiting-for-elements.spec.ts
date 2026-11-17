import { test } from "@playwright/test";

test("Waiting for Elements", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");

  // 1. Wait until element appears
  // Example: Waiting for the welcome message to appear before interacting
  const welcomeMessage = page.locator("#welcomeMessage");
  await welcomeMessage.waitFor();
  const welcomeText = await welcomeMessage.textContent();
  console.log("Welcome message:", welcomeText);

  // 2. Wait for a specific network state
  // Example: Wait until network is idle after a button click triggers an API call
  await page.click("#loadDataButton"); // assume this triggers network requests
  await page.waitForLoadState("networkidle"); // waits until network requests are finished
  const dataText = await page.textContent("#data");
  console.log("Loaded data:", dataText);

  // 3. Hard wait (not recommended)
  // Example: Waiting 2 seconds before clicking next (sometimes used if animation is not easily detectable)
  const nextStepButton = page.locator("#nextStepButton");
  const textBefore = await nextStepButton.textContent();
  console.log("Button text before wait:", textBefore);

  await nextStepButton.click();
  await page.waitForTimeout(2000); // hard wait for 2 seconds

  const textAfter = await nextStepButton.textContent();
  console.log("Button text after click:", textAfter);
});
