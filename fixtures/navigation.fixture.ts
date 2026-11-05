import { test as base } from "@playwright/test";
import MyAccountPage from "../pages/my-account/MyAccountPage";
import { goToLoginPage, goToStartPage } from "../actions/navigation";

type Fixtures = {
  myAccountPage: MyAccountPage;
};

export const test = base.extend<Fixtures>({
  myAccountPage: async ({ page }, use) => {
    await goToStartPage(page);
    const loginPage = await goToLoginPage(page);
    await loginPage.waitUntilPageIsLoaded();
    await loginPage.inputUsername("students");
    await loginPage.inputPassword("Default1!");

    const myAccountPage = await loginPage.clickLoginButton();
    await myAccountPage.waitUntilPageIsLoaded();

    await use(myAccountPage);

    //optionally, you can add cleanup code here if needed
    //clean up code will be executed after the test using this fixture is done
  },
});

export { expect } from "@playwright/test";
