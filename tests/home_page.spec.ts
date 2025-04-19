import { test, expect } from '@playwright/test';
import { HomePage } from './pom/home_page';

test.describe('Home Component - Navigation', () => {
  test('should navigate to portfolio home page', async ({ page }) => {
    const homePage = new HomePage(page);

    // Navigate to the home page
    await homePage.navigateMain();

    // Click the Portfolio button and verify navigation
    await homePage.clickPortfolioButton();
    await expect(page).toHaveURL(/portfolio/);
  });
});

test.describe('Home Component - Content Verification', () => {
  test('should verify all content with text is visible', async ({ page }) => {
    const homePage = new HomePage(page);

    // Navigate to the home page
    await homePage.navigateMain();

    // Verify the title is visible
    const homeTitle = page.locator('.home-title');
    await expect(homeTitle).toBeVisible();
    await expect(homeTitle).toHaveText('Tested. Trusted. Delivered.');

    // Verify the author block is visible
    const homeAuthor = page.locator('.home-author');
    await expect(homeAuthor).toBeVisible();

    // Verify the static author name is visible
    const authorName = page.locator('.author-name');
    await expect(authorName).toBeVisible();
    await expect(authorName).toHaveText('Mykhail,');

    // Verify the dynamic text is visible
    const dynamicText = page.locator('#dynamic-text');
    await expect(dynamicText).toBeVisible();
    await expect(dynamicText).not.toBeEmpty();

    // Verify the blockquote is visible
    const blockquote = page.locator('blockquote');
    await expect(blockquote).toBeVisible();
    await expect(blockquote).toHaveText(
      'I am a software test engineer with 2+ years of experience ensuring the quality and reliability of software products.'
    );

    // Verify the Portfolio button is visible
    const portfolioButton = page.locator('button >> a[routerLink="/portfolio"]');
    await expect(portfolioButton).toBeVisible();
    await expect(portfolioButton).toHaveText('Portfolio');
  });
});
