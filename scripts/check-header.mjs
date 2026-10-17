import { chromium, expect } from '@playwright/test'
import assert from 'node:assert/strict'
import { mkdir } from 'node:fs/promises'

const browser = await chromium.launch({
  ...(process.env.DESIGN_BROWSER_PATH ? { executablePath: process.env.DESIGN_BROWSER_PATH } : {}),
})
const page = await browser.newPage()
page.setDefaultNavigationTimeout(120000)
const base = process.env.DESIGN_TEST_URL || 'http://localhost:3002'
const errors = []
page.on('pageerror', (error) => errors.push(error.message))
await mkdir('test-results/header', { recursive: true })
try {
  await page.setViewportSize({ width: 1440, height: 900 })
  await page.goto(base, { waitUntil: 'domcontentloaded' })
  const header = page.locator('.agm-header')
  await expect(header).toHaveAttribute('data-navigation-ready', 'true', { timeout: 30000 })
  const services = header.locator('summary').filter({ hasText: 'Services' })
  const industries = header.locator('summary').filter({ hasText: 'Industries' })
  await services.click()
  await expect(header.locator('details[open]')).toHaveCount(1)
  const bounds = await header.locator('details[open] .agm-nav-popover').boundingBox()
  assert.ok(bounds.x >= 0 && bounds.x + bounds.width <= 1440)
  await industries.click()
  await expect(header.locator('details[open]')).toHaveCount(1)
  await expect(services.locator('..')).not.toHaveAttribute('open')
  await page.keyboard.press('Escape')
  await expect(header.locator('details[open]')).toHaveCount(0)
  await expect(industries).toBeFocused()
  await services.click()
  await page.locator('.agm-hero h1').click()
  await expect(header.locator('details[open]')).toHaveCount(0)
  await page.evaluate(() => window.scrollTo(0, 600))
  assert.ok(
    Math.abs((await header.boundingBox()).y) <= 1,
    'Header must stay at the top while scrolling',
  )
  await page.evaluate(() => window.scrollTo(0, 0))
  await services.click()
  await header.getByRole('link', { name: 'View all services' }).click()
  await page.waitForURL((url) => url.pathname.replace(/\/$/, '') === '/services')
  await expect(header.locator('details[open]')).toHaveCount(0)
  console.log(
    'PASS desktop: one dropdown, outside click, Escape/focus, sticky header, link navigation',
  )

  for (const [width, height] of [
    [320, 800],
    [375, 850],
    [768, 900],
    [740, 420],
  ]) {
    await page.setViewportSize({ width, height })
    await page.goto(base, { waitUntil: 'domcontentloaded' })
    await expect(header).toHaveAttribute('data-navigation-ready', 'true', { timeout: 30000 })
    const toggle = page.getByRole('button', { name: 'Open navigation' })
    await toggle.click()
    await expect(page.getByRole('button', { name: 'Close navigation' })).toHaveAttribute(
      'aria-expanded',
      'true',
    )
    assert.equal(await page.locator('main').evaluate((element) => element.inert), true)
    assert.equal(await page.evaluate(() => document.body.style.overflow), 'hidden')
    await services.click()
    await industries.click()
    await expect(header.locator('details[open]')).toHaveCount(1)
    await page.keyboard.press('Escape')
    await expect(header.locator('details[open]')).toHaveCount(0)
    await expect(page.getByRole('button', { name: 'Close navigation' })).toBeVisible()
    await page.getByRole('button', { name: 'Close navigation' }).focus()
    await page.keyboard.press('Tab')
    await expect(header.getByRole('link', { name: 'AEC Growth Media home' })).toBeFocused()
    await page.keyboard.press('Shift+Tab')
    await expect(page.getByRole('button', { name: 'Close navigation' })).toBeFocused()
    await page.screenshot({
      path: 'test-results/header/menu-' + width + '-' + height + '.png',
      caret: 'initial',
    })
    await page.keyboard.press('Escape')
    await expect(toggle).toHaveAttribute('aria-expanded', 'false')
    assert.equal(await page.locator('main').evaluate((element) => element.inert), false)
    assert.notEqual(await page.evaluate(() => document.body.style.overflow), 'hidden')
    await toggle.click()
    await header.getByRole('link', { name: 'About', exact: true }).click()
    await page.waitForURL((url) => url.pathname.replace(/\/$/, '') === '/about')
    await expect(toggle).toHaveAttribute('aria-expanded', 'false')
    assert.notEqual(await page.evaluate(() => document.body.style.overflow), 'hidden')
    assert.ok(
      await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth + 1),
    )
    console.log(
      'PASS mobile ' +
        width +
        'x' +
        height +
        ': submenu, focus trap, Escape, scroll restore, links',
    )
  }
  await page.getByRole('button', { name: 'Open navigation' }).click()
  await page.setViewportSize({ width: 1440, height: 900 })
  await expect(header.locator('details[open]')).toHaveCount(0)
  await expect(page.getByRole('button', { name: 'Open navigation' })).toHaveAttribute(
    'aria-expanded',
    'false',
  )
  assert.notEqual(await page.evaluate(() => document.body.style.overflow), 'hidden')
  assert.deepEqual(errors, [])
  console.log('PASS resize cleanup and browser runtime checks')
} finally {
  await browser.close()
}
