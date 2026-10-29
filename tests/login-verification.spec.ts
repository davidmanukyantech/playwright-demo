import { test, expect } from "@playwright/test";
import { goToLoginPage, goToStartPage } from "../actions/navigation";

test(
  "Verify a user can login to the application with valid credentials",
  { tag: ["@smoke", "@regression", "@login"] },
  async ({ page }) => {
    await test.step("Go to the start page", async () => {
      await goToStartPage(page);
    });

    const loginPage = await test.step("Navigate to the login page", async () =>
      goToLoginPage(page));

    await test.step("Wait until the login page is loaded", async () => {
      await loginPage.waitUntilPageIsLoaded();
    });

    await test.step("Input username", async () => {
      await loginPage.inputUsername("students");
    });

    await test.step("Input password", async () => {
      await loginPage.inputPassword("Default1!");
    });

    const myAccountPage = await test.step("Click the login button", async () =>
      loginPage.clickLoginButton());

    await test.step("Wait until the My Account page is loaded", async () => {
      await myAccountPage.waitUntilPageIsLoaded();
    });

    const logOutText = await test.step("Get the Log out text", async () =>
      myAccountPage.getLogOutText());

    await test.step("Verify login was successful", async () => {
      expect(logOutText).toBe("Log out");
    });
  },
);
