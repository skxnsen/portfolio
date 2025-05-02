import { test, expect } from '@playwright/test';
import { ContactPage } from './pom/contact_page';

test.describe('Contact Component - Content Verification', () => {
  test('should verify all contact content is visible', async ({ page }) => {
    const contactPage = new ContactPage(page);

    // Navigate to the contact page
    await contactPage.navigateToContact();

    // Verify the profile image is visible
    await expect(contactPage.profileImage).toBeVisible();

    // Verify the contact title is visible and has correct text
    await expect(contactPage.contactTitle).toBeVisible();
    await expect(contactPage.contactTitle).toHaveText(/Mykhail/i);

    // Verify the contact paragraph is visible
    await expect(contactPage.contactParagraph).toBeVisible();
    await expect(contactPage.contactParagraph).toContainText(
      "I'm always excited to collaborate on innovative projects"
    );

    // Verify the LinkedIn button is visible and clickable
    await expect(contactPage.linkedinButton).toBeVisible();
    await expect(contactPage.linkedinButton).toHaveText(/Connect on LinkedIn/i);
  });

  test('should verify all social media icons are functional', async ({ page }) => {
    const contactPage = new ContactPage(page);

    // Navigate to the contact page
    await contactPage.navigateToContact();

    // Verify all social media icons are visible
    const mediaIconLinks = await contactPage.getMediaIconLinks();
    expect(mediaIconLinks).toContain('https://www.linkedin.com/in/skxnsen/');
    expect(mediaIconLinks).toContain('https://github.com/skxnsen/');
    expect(mediaIconLinks).toContain('mailto:emkeyen96@gmail.com');
    expect(mediaIconLinks).toContain('https://t.me/skxnsen/');
  });
});

test.describe('Contact Component - Navigation', () => {
    test('should navigate to LinkedIn when [Contact me] button is clicked', async ({ page, context }) => {
      const contactPage = new ContactPage(page);
  
      // Navigate to the contact page
      await contactPage.navigateToContact();
  
      // Click the LinkedIn button and wait for the new tab
      const [newPage] = await Promise.all([
        context.waitForEvent('page'), // Wait for a new page (tab) to open (blank a href param)
        contactPage.clickLinkedInButton(), // Click the [Contact me] button
      ]);
  
      // Wait for the new page to load
      await newPage.waitForLoadState();
  
      // Verify the new page URL contains LinkedIn and skxnsen
      await expect(newPage).toHaveURL(/linkedin\.com.*skxnsen/);
    });
  });
