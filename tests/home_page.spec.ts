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
    await expect(homePage.homeTitle).toBeVisible();
    await expect(homePage.homeTitle).toHaveText('Hello,');

    // Verify the author block is visible
    await expect(homePage.homeSubtitle).toBeVisible();
    await expect(homePage.homeSubtitle).toHaveText('My name is Mykhail');

    // Verify the dynamic text is visible
    await expect(homePage.dynamicText).toBeVisible();
    await expect(homePage.dynamicText).not.toBeEmpty();


    // Verify the Portfolio button is visible
    await expect(homePage.portfolioButton).toBeVisible();
    await expect(homePage.portfolioButton).toHaveText('Portfolio');
  });
});
