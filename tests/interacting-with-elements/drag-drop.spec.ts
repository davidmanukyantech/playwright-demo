import { test } from "@playwright/test";

test("Drag & Drop", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");

  // Scroll to Drag and Drop section
  await page
    .locator("//h2[text()='Todo Drag & Drop']")
    .scrollIntoViewIfNeeded();

  // Get locators
  const finishReportTodo = page.locator("//li[text()='Finish report']");
  const doneZone = page.locator("#doneList");

  // Drag and Drop using dragTo
  await finishReportTodo.dragTo(doneZone);

  await page.waitForTimeout(1000);

  // Drag and Drop using dragAndDrop
  await page.dragAndDrop("//li[text()='Buy groceries']", "#doneList");
});
