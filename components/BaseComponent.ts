import { Page, Locator } from "@playwright/test";

/**
 * BaseComponent class represents a generic component on a web page.
 * It provides common methods to interact with the component's elements.
 */

export default class BaseComponent {
  page: Page;
  element: Locator;

  constructor(element: Locator) {
    this.element = element;
    // In Playwright, locator.page() is a method on a Locator that returns the Page object the locator belongs to.
    this.page = element.page();
  }

  async click(selector: string) {
    await this.element.locator(selector).click();
  }

  async hover(selector: string) {
    await this.element.locator(selector).hover();
  }

  async fill(selector: string, value: string) {
    await this.element.locator(selector).fill(value);
  }

  async getText(selector: string): Promise<string> {
    const locator = this.element.locator(selector);
    const text = (await locator.innerText()).trim();
    return text;
  }

  async isVisible(selector: string): Promise<boolean> {
    return await this.element.locator(selector).isVisible();
  }

  async waitForElement(selector: string, timeout = 10000): Promise<void> {
    await this.element.locator(selector).waitFor({ state: "visible", timeout });
  }
}
