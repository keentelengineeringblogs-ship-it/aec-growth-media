import { chromium } from '@playwright/test'
import assert from 'node:assert/strict'
import { mkdir } from 'node:fs/promises'

const base = process.env.DESIGN_TEST_URL || 'http://localhost:3002'
const browser = await chromium.launch({
  ...(process.env.DESIGN_BROWSER_PATH ? { executablePath: process.env.DESIGN_BROWSER_PATH } : {}),
})
const context = await browser.newContext()
const page = await context.newPage()
// Cold compilation plus the initial CMS connection can exceed 30 seconds.
page.setDefaultNavigationTimeout(120000)
const errors = []
page.on('pageerror', (error) => errors.push(error.message))
// Never allow a smoke test to write to the actual backend.
await context.route('**/api/form-submissions', (route) =>
  route.fulfill({
    status: 201,
    contentType: 'application/json',
    body: JSON.stringify({ doc: { id: 'local-test' } }),
  }),
)
await mkdir('test-results/design', { recursive: true })
try {
  for (const width of [320, 375, 768, 1440]) {
    await page.setViewportSize({ width, height: 900 })
    const response = await page.goto(base, { waitUntil: 'domcontentloaded' })
    assert.equal(response.status(), 200)
    await page.locator('.agm-hero h1').waitFor()
    assert.ok(
      await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth + 1),
      'Horizontal overflow at ' + width,
    )
    await page.screenshot({ path: 'test-results/design/home-' + width + '.png', fullPage: true, caret: 'initial' })
    if (width === 375) {
      await page.getByRole('button', { name: 'Open navigation' }).click()
      assert.equal(
        await page.getByRole('button', { name: 'Close navigation' }).getAttribute('aria-expanded'),
        'true',
      )
      await page.keyboard.press('Escape')
      assert.equal(
        await page.getByRole('button', { name: 'Open navigation' }).getAttribute('aria-expanded'),
        'false',
      )
    }
    console.log('PASS homepage width ' + width)
  }
  const firstHeading = await page.locator('.agm-hero h1').innerText()
  await page.getByRole('button', { name: 'Next slide' }).click()
  assert.notEqual(await page.locator('.agm-hero h1').innerText(), firstHeading)
  await page.getByRole('button', { name: 'Previous slide' }).click()
  assert.equal(await page.locator('.agm-hero h1').innerText(), firstHeading)
  console.log('PASS hero navigation')
  for (const path of [
    '/services',
    '/services/website-design',
    '/industries/engineering-firms',
    '/locations/florida',
    '/contact',
    '/posts',
    '/search',
    '/admin/login',
  ]) {
    const response = await page.goto(base + path, { waitUntil: 'domcontentloaded' })
    assert.ok(response.status() < 400, path + ' status ' + response.status())
    console.log('PASS route ' + path)
  }
  await page.goto(base + '/contact', { waitUntil: 'domcontentloaded' })
  await context.route('**/api/forms?*', (route) =>
    route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({
        docs: [
          {
            id: 'local-form',
            fields: [
              'fullName',
              'email',
              'company',
              'website',
              'industry',
              'goal',
              'message',
              'consent',
            ].map((name) => ({ name })),
          },
        ],
      }),
    }),
  )
  const form = page.getByRole('form', { name: 'AEC Growth Audit request form' })
  await form.locator('[name=fullName]').fill('Local Test')
  await form.locator('[name=email]').fill('test@example.com')
  await form.locator('[name=company]').fill('Local Test Company')
  await form.locator('[name=website]').fill('https://example.com')
  await form.locator('[name=industry]').selectOption({ label: 'Engineering firm' })
  await form.locator('[name=goal]').selectOption({ label: 'Website design or redesign' })
  await form.locator('[name=consent]').check()
  await form.getByRole('button', { name: 'Request my audit' }).click()
  await form.getByRole('status').waitFor()
  console.log('PASS form success using mocked existing Payload API')
  await context.route('**/api/forms?*', (route) =>
    route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({ docs: [] }),
    }),
  )
  await form.locator('[name=fullName]').fill('Local Test')
  await form.locator('[name=email]').fill('test@example.com')
  await form.locator('[name=company]').fill('Local Test Company')
  await form.locator('[name=website]').fill('https://example.com')
  await form.locator('[name=industry]').selectOption({ label: 'Engineering firm' })
  await form.locator('[name=goal]').selectOption({ label: 'Website design or redesign' })
  await form.locator('[name=consent]').check()
  await form.getByRole('button', { name: 'Request my audit' }).click()
  await form.getByRole('alert').waitFor()
  console.log('PASS missing form error')
  assert.deepEqual(errors, [], 'Browser runtime errors')
} finally {
  await browser.close()
}
