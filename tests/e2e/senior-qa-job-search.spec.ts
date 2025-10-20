import { test, expect } from '@playwright/test';

test('Senior QA Job Search and Application', async ({ page }) => {
    // Go to Arine website with longer timeout
    await page.goto('/', { waitUntil: 'domcontentloaded', timeout: 30000 });
    
    // Close cookie modal if it appears
    try {
        // Try to find and click the close button
        const closeButton = page.locator('#hs-eu-close-button');
        await closeButton.waitFor({ state: 'visible', timeout: 5000 });
        await closeButton.click();
        await page.waitForTimeout(1000);
    } catch (error) {
        // Fallback: try the × button text selector
        try {
            const fallbackCloseButton = page.locator('button:has-text("×")').first();
            await fallbackCloseButton.waitFor({ state: 'visible', timeout: 3000 });
            await fallbackCloseButton.click();
        } catch (fallbackError) {
            // Cookie modal might not appear, continue
        }
    }
    
    // Wait for the About button to be present
    const aboutButton = page.locator('button:has-text("About")').first();
    await aboutButton.waitFor({ state: 'visible', timeout: 5000 });
    
    // Verify we're on the right page
    await expect(page).toHaveTitle(/Arine/);
    
    // Click About menu
    await page.locator('button:has-text("About")').first().click();
    await page.waitForTimeout(1000);
    
    // Click Careers from dropdown
    await page.locator('a[role="menuitem"]:has-text("Careers")').click();
    
    // Wait for Explore Positions button to be visible instead of networkidle
    const explorePositionsButton = page.locator('a.cta-button:has-text("Explore Positions")');
    await expect(explorePositionsButton).toBeVisible();
    
    // Click Explore Positions (opens new tab)
    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        page.locator('a.cta-button:has-text("Explore Positions")').click()
    ]);
    
    // Close original tab and switch to new one
    await page.close();
    
    // Wait for the search filter to be available instead of networkidle
    const keywordFilter = newPage.locator('#keyword-filter');
    await keywordFilter.waitFor({ state: 'visible', timeout: 10000 });
    
    // Search for QA jobs
    await keywordFilter.scrollIntoViewIfNeeded();
    await newPage.locator('#keyword-filter').fill('QA');
    await newPage.waitForTimeout(3000);
    
    // Click on Senior QA Engineer job
    const seniorQALink = newPage.locator('a:has-text("Senior QA Engineer")');
    await seniorQALink.scrollIntoViewIfNeeded();
    await seniorQALink.click();
    
    // Wait for job page to load by checking for the job title
    const jobTitle = newPage.locator('h1:has-text("Senior QA Engineer")');
    await expect(jobTitle).toBeVisible();
    
    // Click Apply button and wait for form to appear
    await newPage.locator('button:has-text("Apply")').click();
    
    // Wait for application form to load
    const applicationForm = newPage.locator('h2:has-text("Apply for this job")');
    await expect(applicationForm).toBeVisible();
    await newPage.waitForTimeout(2000);
    
    // Verify and highlight form fields
    const firstNameField = newPage.getByRole('textbox', { name: 'First Name' });
    await firstNameField.scrollIntoViewIfNeeded();
    await firstNameField.click();
    await expect(firstNameField).toBeVisible();
    await newPage.waitForTimeout(800);
    
    const lastNameField = newPage.getByRole('textbox', { name: 'Last Name' });
    await lastNameField.scrollIntoViewIfNeeded();
    await lastNameField.click();
    await expect(lastNameField).toBeVisible();
    await newPage.waitForTimeout(800);
    
    const emailField = newPage.getByRole('textbox', { name: 'Email' });
    await emailField.scrollIntoViewIfNeeded();
    await emailField.click();
    await expect(emailField).toBeVisible();
    await newPage.waitForTimeout(800);
    
    console.log('✅ Senior QA job search and application test completed successfully!');
});
