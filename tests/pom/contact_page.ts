import { Page, Locator } from '@playwright/test';

export class ContactPage {
  readonly page: Page;
  readonly profileImage: Locator;
  readonly contactTitle: Locator;
  readonly contactParagraph: Locator;
  readonly linkedinButton: Locator;
  readonly mediaIcons: Locator;

  constructor(page: Page) {
    this.page = page;
    this.profileImage = page.locator('.contact-image'); // Profile image
    this.contactTitle = page.locator('.contact-title'); // Contact title
    this.contactParagraph = page.locator('.contact-paragraph'); // Contact paragraph
    this.linkedinButton = page.locator('button >> a[href*="linkedin.com"]'); // LinkedIn button
    this.mediaIcons = page.locator('.media-icons a'); // Social media icons
  }

  async navigateToContact() {
    await this.page.goto('/contact');
  }

  async clickLinkedInButton() {
    await this.linkedinButton.click();
  }

  async getMediaIconLinks(): Promise<string[]> {
    return await this.mediaIcons.evaluateAll((elements) =>
      elements.map((el) => (el as HTMLAnchorElement).href)
    );
  }
}
