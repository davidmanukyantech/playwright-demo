import { test, expect } from "@playwright/test";

test("getByRole()", async ({ page }) => {
  await page.goto("https://selectors-practice.onrender.com/");
  // await page.getByRole("button", { name: "Login" }).click();
  // await page.getByRole("checkbox", { name: "Option 1" }).check();
  // await page.getByRole("radio", { name: "Choice A" }).check();
  // await page.getByRole("textbox", { name: "Email" }).fill("test@example.com");
  // await page
  //   .getByRole("textbox", { name: "Email" })
  //   .pressSequentially("test@example.com", { delay: 200 });
  await page.getByRole("heading", { name: "Welcome" }).isVisible();
  await expect(page.getByRole("heading", { name: "Welcome" })).toBeVisible();
  // await page.getByRole("listitem", { name: "Laptop" }).isVisible();
  // await page.getByRole("link", { name: "Example Website" }).click();
});
