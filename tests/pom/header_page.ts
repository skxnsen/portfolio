import { Page, Locator } from '@playwright/test';

export class HeaderPage {
  readonly page: Page;
  readonly desktopNavLinks: Locator;
  readonly mobileMenuButton: Locator;
  readonly mobileSidebar: Locator;
  readonly mobileCloseButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.desktopNavLinks = page.locator('.nav-links a'); // Desktop navigation links
    this.mobileMenuButton = page.locator('.menu-button'); // Mobile menu button
    this.mobileSidebar = page.locator('.mat-sidenav'); // Mobile sidebar
    this.mobileCloseButton = page.locator('.close-button'); // Mobile menu close button
  }

  async navigateToHome() {
    await this.page.goto('./');
  }

  async clickDesktopNavLink(linkText: string) {
    await this.desktopNavLinks.locator(`text=${linkText}`).click();
  }

  async openMobileMenu() {
    await this.mobileMenuButton.click();
  }

  async clickMobileNavLink(linkText: string) {
    await this.mobileSidebar.locator(`text=${linkText}`).click();
  }

  async closeMobileMenu() {
    await this.mobileCloseButton.click();
  }
}
