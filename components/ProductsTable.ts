import BaseComponent from "./BaseComponent";
import parseNumeric from "../utils/parseNumeric";

/**
 * ProductsTable class represents a table of products on a web page.
 * It extends the BaseComponent class and provides methods to interact with the products table.
 */

export class ProductsTable extends BaseComponent {
  async getCurrentProducts(): Promise<Product[]> {
    const products = this.element.locator(
      "//ul[contains(@class, 'products')]//li[contains(@class, 'product')]", // 16 products
    );
    await products.first().waitFor({ state: "visible" });
    const allProducts = await products.all();
    const productInstances = allProducts.map((product) => new Product(product));
    return productInstances;
  }
}

export class Product extends BaseComponent {
  async getTitle(): Promise<string> {
    return await this.getText("//div[contains(@class, 'title')]");
  }

  async getPrice(): Promise<number> {
    const numText = await this.getText(
      "//span[contains(@class, 'Price-amount')]",
    );
    return parseNumeric(numText);
  }

  async addToCart(): Promise<void> {
    await this.hover("//img");
    await this.waitForElement("//a[contains(@aria-label, 'Add to cart')]");
    await this.click("//a[contains(@aria-label, 'Add to cart')]");
  }

  async isAddedToCart(): Promise<boolean> {
    const button = this.element.locator(
      "//a[contains(@aria-label, 'Add to cart')]",
    );
    await this.waitForElement("//a[@title='View cart']");
    const classAttr = await button.getAttribute("class");
    return classAttr?.includes("added") ?? false;
  }

  async isProductPurchasable(): Promise<boolean> {
    await this.hover("//img");
    return await this.isVisible("//a[contains(@aria-label, 'Add to cart')]");
  }

  //   async clickViewCart(): Promise<CartPage> {
  //     await this.click("//a[@title='View cart']");
  //     return new CartPage(this.page);
  //   }
}
