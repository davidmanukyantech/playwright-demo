import { test } from "@playwright/test";

test("Checkboxes & Radio Buttons", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");

  // Checking a Checkbox
  await page.check("div.checkbox-group input[value='Option 1']");

  // Click also works for checkboxes
  await page.click("div.checkbox-group input[value='Option 1']");

  // Wait for 2 seconds to observe the change
  await page.waitForTimeout(2000);

  // Unchecking a Checkbox
  await page.uncheck("div.checkbox-group input[value='Option 1']");

  // Click also works for checkboxes
  await page.click("div.checkbox-group input[value='Option 1']");

  // Selecting a Radio Button
  await page.getByRole("radio", { name: "Choice A" }).check();
});
