import { test, expect } from "@playwright/test";
import { goToLoginPage } from "../actions/navigation";
import { goToStartPage } from "../actions/navigation";

test(
  "Login with valid credentials",
  { tag: ["@smoke", "@regression", "@login"] },
  async ({ page }) => {
    await test.step("Go to start page", async () => {
      await goToStartPage(page);
    });

    const loginPage = await test.step("Go to login page", async () => {
      return await goToLoginPage(page);
    });

    await test.step("Wait until login page is loaded", async () => {
      await loginPage.waitUntilPageIsLoaded();
    });

    await test.step("Input username", async () => {
      await loginPage.inputUsername("students");
    });

    await test.step("Input password", async () => {
      await loginPage.inputPassword("Default1!");
    });

    const myAccountPage = await test.step("Click login button", async () => {
      return await loginPage.clickLoginButton();
    });

    await test.step("Verify that the user is logged in", async () => {
      await myAccountPage.waitUntilPageIsLoaded();
    });

    const logoutText = await test.step("Get the logout text", async () => {
      return await myAccountPage.getLogOutText();
    });

    await test.step("Verify that the logout text is correct", async () => {
      expect(logoutText).toBe("Log out");
    });
  },
);
