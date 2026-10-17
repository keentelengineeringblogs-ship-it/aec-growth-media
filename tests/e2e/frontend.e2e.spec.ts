import { test, expect } from '@playwright/test'

test.describe('Frontend', () => {
  test('can load homepage', async ({ page }) => {
    await page.goto('http://localhost:3000')
    await expect(page).toHaveTitle(/AEC Growth Media/)
    const heading = page.locator('h1').first()
    await expect(heading).toContainText('AI Search & Digital Growth')
    await expect(page.getByRole('button', { name: 'Next slide' })).toBeVisible()
  })
})
