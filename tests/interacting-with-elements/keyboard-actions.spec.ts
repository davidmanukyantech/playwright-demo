import { test } from "@playwright/test";

test("Keyboard Actions", { tag: "@smoke" }, async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");

  // Focus on input field
  await page.click("#keyboardInput");

  // Type text using keyboard
  const text = "Hello World from Keyboard!";
  await page.keyboard.type("Hello World from Keyboard", { delay: 100 });
  await page.waitForTimeout(2000);

  // Press Enter key
  await page.keyboard.press("Enter");
  await page.waitForTimeout(2000);

  // Press Backspace key
  for (let i = 0; i < text.length; i++) {
    await page.keyboard.press("Backspace");
    await page.waitForTimeout(100);
  }
});
