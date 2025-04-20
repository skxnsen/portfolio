import { test, expect } from '@playwright/test';
import { HeaderPage } from './pom/header_page';

test.describe('Header Component - Desktop Navigation', () => {
  test('should navigate to all sections using desktop menu', async ({ page }) => {
    const headerPage = new HeaderPage(page);

    // Navigate to the home page
    await headerPage.navigateToHome();

    // Verify navigation links work
    const sections = ['Home', 'About', 'Skills', 'Portfolio', 'Contact'];
    for (const section of sections) {
      await headerPage.clickDesktopNavLink(section);
    
      // Check if the section is "Home" and verify the root URL
      // Home component have root path (./)
      if (section === 'Home') {
        await expect(page).toHaveURL('./'); // Root path for "Home"
      } else {
        await expect(page).toHaveURL(new RegExp(section.toLowerCase()));
      }
    }
  });
});

test.describe('Header Component - Mobile Navigation', () => {
    test.beforeEach(async ({ page }) => {
      // Set the viewport size to simulate a mobile device
      await page.setViewportSize({ width: 375, height: 812 });
    });
  
    test('should open and close the mobile menu', async ({ page }) => {
      const headerPage = new HeaderPage(page);
  
      // Navigate to the home page
      await headerPage.navigateToHome();
  
      // Open the mobile menu
      await headerPage.openMobileMenu();
      await expect(headerPage.mobileSidebar).toBeVisible();
  
      // Close the mobile menu
      await headerPage.closeMobileMenu();
      await expect(headerPage.mobileSidebar).not.toBeVisible();
    });
  
    test('should navigate to all sections using mobile menu', async ({ page }) => {
      const headerPage = new HeaderPage(page);
  
      // Navigate to the home page
      await headerPage.navigateToHome();
  
      // Open the mobile menu and verify navigation links work
      const sections = ['Home', 'About', 'Skills', 'Portfolio', 'Contact'];
      for (const section of sections) {
        await headerPage.openMobileMenu();
        await headerPage.clickMobileNavLink(section);
        if (section === 'Home') {
            await expect(page).toHaveURL('./'); // Root path for "Home"
          } else {
            await expect(page).toHaveURL(new RegExp(section.toLowerCase()));
          }
      }
    });
  });
