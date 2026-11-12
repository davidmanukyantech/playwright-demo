import { ProductsTable } from "../../components/ProductsTable";
import BasePage from "../BasePage";

/**
 * Dashboard Page page object
 * URL: /
 */

export default class HomePage extends BasePage {
  async waitUntilPageIsLoaded() {
    await this.waitForElement("//h2[contains(., 'Trending Products')]");
  }

  async getTrendingTitle(): Promise<string> {
    return this.getText("//p[contains(., 'Trending Now')]");
  }

  getTrendingProductsTable() {
    return new ProductsTable(
      this.page.locator(
        "//div[contains(@class, 'group')][contains(@class, 'has-background')][div[contains(., 'Trending Products')]]",
      ),
    );
  }

  getNewArrivalsProductsTable() {
    return new ProductsTable(
      this.page.locator(
        "//div[contains(@class, 'group')][contains(@class, 'has-background')][div[contains(., 'New Arrivals')]]",
      ),
    );
  }
}
