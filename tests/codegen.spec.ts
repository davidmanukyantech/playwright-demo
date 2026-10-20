import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");
  await page.getByRole("textbox", { name: "Username" }).click();
  await page.getByRole("textbox", { name: "Username" }).fill("david");
  await page.getByRole("textbox", { name: "Username" }).press("Tab");
  await page.getByPlaceholder("Password").fill("aasdahdah");
  await page.getByPlaceholder("Password").press("Tab");
  await page.locator("#rememberMe").press("Tab");
  await page.getByRole("button", { name: "Login" }).click();
});
