/**
 * My Account Page - page object
 * URL: /my-account
 */

import BasePage from "../BasePage";

export default class MyAccountPage extends BasePage {
  async waitUntilPageIsLoaded() {
    await this.waitForElement(
      "//nav[@aria-label='Account pages']//li/a[normalize-space(text())='Log out']",
    );
  }

  async getLogOutText(): Promise<string> {
    try {
      return await this.getText(
        "//nav[@aria-label='Account pages']//li/a[normalize-space(text())='Log out']",
      );
    } catch (error) {
      console.error("Failed to get log out text:", error);
      return "";
    }
  }
}
