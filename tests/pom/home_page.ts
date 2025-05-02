import { Page, Locator } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly dynamicText: Locator;
  readonly portfolioButton: Locator;
  readonly authorName: Locator;
  readonly homeTitle: Locator;
  readonly homeSubtitle: Locator;

  constructor(page: Page) {
    this.page = page;
    this.dynamicText = page.locator('#dynamic-text');
    this.portfolioButton = page.locator('button >> text=Portfolio');
    this.authorName = page.locator('.author-name');
    this.homeTitle = page.locator('.home-title');
    this.homeSubtitle = page.locator('.home-subtitle');
    
  }

  async navigateMain() {
    await this.page.goto('./');
  }

  async getDynamicText(): Promise<string> {
    return (await this.dynamicText.textContent()) ?? '';
  }

  async clickPortfolioButton() {
    await this.portfolioButton.click();
  }
}
