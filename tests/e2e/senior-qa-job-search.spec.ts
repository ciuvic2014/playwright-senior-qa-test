import { test, expect } from '@playwright/test';

test('Senior QA Job Search and Application', async ({ page }) => {
    // Go to Arine website
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    // Accept cookies if modal appears
    try {
        const cookieModal = page.locator('#hs-eu-cookie-confirmation');
        if (await cookieModal.isVisible({ timeout: 3000 })) {
            await page.locator('#hs-eu-confirmation-button').click();
            await cookieModal.waitFor({ state: 'hidden', timeout: 5000 });
        }
    } catch {
        // Cookie modal might not appear, continue
    }
    
    // Verify we're on the right page
    await expect(page).toHaveTitle(/Arine/);
    
    // Click About menu
    await page.locator('button:has-text("About")').first().click();
    await page.waitForTimeout(1000);
    
    // Click Careers from dropdown
    await page.locator('a[role="menuitem"]:has-text("Careers")').click();
    await page.waitForLoadState('networkidle');
    
    // Verify Explore Positions button and click it
    await expect(page.locator('a.cta-button:has-text("Explore Positions")')).toBeVisible();
    
    // Click Explore Positions (opens new tab)
    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        page.locator('a.cta-button:has-text("Explore Positions")').click()
    ]);
    
    // Close original tab and switch to new one
    await page.close();
    await newPage.waitForLoadState('networkidle');
    
    // Search for QA jobs
    await newPage.locator('#keyword-filter').scrollIntoViewIfNeeded();
    await newPage.locator('#keyword-filter').fill('QA');
    await newPage.waitForTimeout(3000);
    
    // Click on Senior QA Engineer job
    const seniorQALink = newPage.locator('a:has-text("Senior QA Engineer")');
    await seniorQALink.scrollIntoViewIfNeeded();
    await seniorQALink.click();
    await newPage.waitForLoadState('networkidle');
    
    // Verify we're on the job page
    await expect(newPage.locator('h1:has-text("Senior QA Engineer")')).toBeVisible();
    
    // Click Apply button
    await newPage.locator('button:has-text("Apply")').click();
    await newPage.waitForLoadState('networkidle');
    await newPage.waitForTimeout(2000);
    
    // Verify application form loaded
    await expect(newPage.locator('h2:has-text("Apply for this job")')).toBeVisible();
    
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
