import { test, expect } from "@playwright/test";
import { goToStartPage, goToLoginPage } from "../../actions/navigation";

test(
  "verify a user can log in successfully",
  { tag: ["smoke", "regression", "login"] },
  async ({ page }) => {
    // go to the start page
    await goToStartPage(page);

    //2 navigate to login page and wait until its loaded
    const loginPage = await goToLoginPage(page);

    //3 wait until login page is loaded

    await loginPage.waitUntilPageIsLoaded();

    //4 enter valid credentials and submit the form
    await loginPage.inputUsername("students");

    //5 input password

    await loginPage.inputPassword("Default1!");

    //clicks login button and get MyAccountPage object
    const accountPage = await loginPage.clickLoginButton();

    //6 wait until my account page is loaded
    await accountPage.waitUntilPageIsLoaded();

    //7 wait until my account is loaded
    await accountPage.waitUntilPageIsLoaded();

    //8get log out text
    const logOutText = await accountPage.getLogOutText();

    //9 verify log out text is correct
    expect(logOutText).toBe("Log Out");
  },
);
