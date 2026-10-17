import { test, expect } from '@playwright/test'

/**
 * Non-destructive, visual regression QA for the five redesigned industry pages.
 *
 * Local: pnpm exec playwright test industries-premium.e2e.spec.ts
 * Against approved preview:
 * AEC_TEST_BASE_URL=https://preview.example.vercel.app pnpm exec playwright test industries-premium.e2e.spec.ts
 *
 * Do not use live form submissions in this suite.
 */
const site = process.env.AEC_TEST_BASE_URL?.replace(/\/$/,'') || 'http://localhost:3000'
const pages = [
 ['/industries/','industries-overview','Digital Growth for the Industries That Build Our World.'],
 ['/industries/engineering-firms/','engineering-firms','Digital Marketing for Engineering Firms'],
 ['/industries/construction-companies/','construction-companies','Digital Marketing for Construction Companies'],
 ['/industries/architecture-firms/','architecture-firms','Digital Marketing for Architecture Firms'],
 ['/industries/permit-drafting-companies/','permit-drafting','Digital Marketing for Permit & Drafting Companies'],
] as const
const widths = [{width:1920,height:1080},{width:1440,height:900},{width:1366,height:768},{width:1280,height:800},{width:1024,height:768},{width:768,height:1024},{width:390,height:844},{width:375,height:812}]

test.describe('Premium industries — content, layout and photography',()=>{
 for(const [route,slug,title] of pages){
  test(slug+' has split hero, real-image load, industry content and navigation',async ({page})=>{
   await page.setViewportSize({width:1440,height:900})
   await page.goto(site+route,{waitUntil:'domcontentloaded'})
   await expect(page.locator('h1')).toHaveCount(1)
   await expect(page.getByRole('heading',{name:title,exact:true})).toBeVisible()
   const hero=page.locator(route==='/industries/'?'.agm-indp-hero':'.agm-ind-detail-hero')
   await expect(hero.locator('img')).toHaveCount(1)
   await expect(hero.locator('img')).toBeVisible()
   await expect.poll(async()=>hero.locator('img').evaluate((img:HTMLImageElement)=>img.complete&&img.naturalWidth>0),{timeout:20000}).toBeTruthy()
   const display=await hero.evaluate(el=>getComputedStyle(el).display)
   expect(display).not.toBe('none')
   await expect(page.locator('.agm-v2-faq-list details')).toHaveCount(6)
   await expect(page.locator('header.agm-premium-header')).toBeVisible()
   await expect(page.locator('footer.agm-premium-footer')).toBeVisible()
   await expect(page.locator('footer.agm-premium-footer a[href="/privacy-policy/"]')).toBeVisible()
   const overflow=await page.evaluate(()=>document.documentElement.scrollWidth-window.innerWidth)
   expect(overflow,'unexpected full-document horizontal scrolling').toBeLessThanOrEqual(2)
  })
 }
 for(const width of widths){
  test('responsive width '+width.width+'px',async ({page})=>{
   await page.setViewportSize(width)
   for(const [route,slug] of pages){
    await page.goto(site+route,{waitUntil:'domcontentloaded'})
    const overflow=await page.evaluate(()=>document.documentElement.scrollWidth-window.innerWidth)
    expect(overflow,`overflow on ${slug} at ${width.width}px`).toBeLessThanOrEqual(2)
    const h1=page.locator('h1')
    await expect(h1).toBeVisible()
    expect(await h1.evaluate(el=>getComputedStyle(el).fontSize)).not.toBe('0px')
   }
  })
 }
 test('desktop and mobile full-page screenshot package for all five industry pages',async ({page})=>{
  for(const variant of [{name:'desktop',width:1440,height:900},{name:'mobile',width:390,height:844}]){
   await page.setViewportSize({width:variant.width,height:variant.height})
   for(const [route,slug] of pages){
    await page.goto(site+route,{waitUntil:'domcontentloaded'})
    // Trigger native lazy image loads by scrolling rather than waiting for
    // offscreen images that the browser deliberately has not requested.
    await page.evaluate(async()=>{
     const pause=(ms:number)=>new Promise(resolve=>setTimeout(resolve,ms))
     for(let y=0;y<document.documentElement.scrollHeight;y+=Math.max(500,innerHeight-150)){
      scrollTo(0,y)
      await pause(80)
     }
     scrollTo(0,0)
    })
    await page.waitForTimeout(350)
    await page.screenshot({path:`test-results/${slug}-${variant.name}-full.png`,fullPage:true,animations:'disabled'})
   }
  }
 })
})

test.describe('Premium header interaction recordings',()=>{
 test.use({video:'on'})
 test('desktop hover, keyboard, outside and Escape handling',async ({page})=>{
  await page.setViewportSize({width:1440,height:900})
  await page.goto(site+'/industries/',{waitUntil:'domcontentloaded'})
  const services=page.getByRole('button',{name:'Services'})
  await services.hover()
  const serviceDropdown=page.locator('#agm-menu-services')
  await expect(serviceDropdown).toBeVisible()
  await page.screenshot({path:'test-results/header-desktop-dropdown.png',animations:'disabled'})
  await serviceDropdown.getByRole('link',{name:/SEO \+ AI Visibility/}).hover()
  await expect(serviceDropdown).toBeVisible()
  await page.keyboard.press('Escape')
  await expect(serviceDropdown).toBeHidden()
  await page.getByRole('button',{name:'Industries'}).focus()
  await expect(page.locator('#agm-menu-industries')).toBeVisible()
  await page.getByRole('button',{name:'Resources'}).hover()
  await expect(page.getByRole('link',{name:'Blog / Insights'})).toBeVisible()
  await expect(page.getByRole('link',{name:'Blog / Insights'})).toHaveAttribute('href','/blog/')
 })
 test('mobile full navigation, accordion and close behavior',async ({page})=>{
  await page.setViewportSize({width:390,height:844})
  await page.goto(site+'/industries/',{waitUntil:'domcontentloaded'})
  const toggle=page.getByRole('button',{name:'Open navigation'})
  await toggle.click()
  await expect(page.getByRole('button',{name:'Close navigation'})).toBeVisible()
  await page.getByRole('button',{name:'Services'}).click()
  await expect(page.getByRole('link',{name:/Website Design & Redesign/}).first()).toBeVisible()
  await page.screenshot({path:'test-results/header-mobile-menu.png',animations:'disabled'})
  await page.getByRole('button',{name:'Industries'}).click()
  await expect(page.getByRole('link',{name:'Engineering Firms'}).first()).toBeVisible()
  await page.keyboard.press('Escape')
  await expect(page.getByRole('button',{name:'Open navigation'})).toBeVisible()
 })
 test('FAQ expands and contracts by keyboard',async ({page})=>{
  await page.setViewportSize({width:1440,height:900})
  await page.goto(site+'/industries/engineering-firms/')
  const faq=page.locator('.agm-ind-premium-faq details').nth(1)
  const summary=faq.locator('summary')
  await summary.focus()
  await page.keyboard.press('Enter')
  await expect(faq).toHaveAttribute('open','')
  await page.screenshot({path:'test-results/industry-faq-expanded.png',animations:'disabled'})
  await page.keyboard.press('Enter')
  await expect(faq).not.toHaveAttribute('open','')
 })
 test('footer desktop capture',async ({page})=>{
  await page.setViewportSize({width:1440,height:900})
  await page.goto(site+'/industries/',{waitUntil:'domcontentloaded'})
  await page.locator('footer.agm-premium-footer').scrollIntoViewIfNeeded()
  await page.locator('footer.agm-premium-footer').screenshot({path:'test-results/footer-desktop.png',animations:'disabled'})
 })
})
