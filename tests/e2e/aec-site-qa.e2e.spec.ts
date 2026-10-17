import { expect, test } from '@playwright/test'

// This suite is read-only: it never submits live leads or modifies Payload data.
const routes = [
  '/', '/about/', '/services/',
  '/services/ai-search-seo/', '/services/website-design/', '/services/ai-automation/', '/services/lead-generation/',
  '/industries/', '/industries/engineering-firms/', '/industries/construction-companies/',
  '/industries/architecture-firms/', '/industries/permit-drafting-companies/',
  '/locations/florida/', '/blog/', '/projects/', '/contact/',
  '/privacy-policy/', '/terms/', '/accessibility/',
]
const viewports = [{width:1440,height:900},{width:768,height:1024},{width:390,height:844},{width:375,height:812}]

test.describe('AEC Growth Media site smoke QA', () => {
 for (const route of routes) {
  test(`${route}: one H1, navigable, no horizontal document overflow`, async ({page}) => {
   await page.goto('http://localhost:3000'+route,{waitUntil:'domcontentloaded'})
   await expect(page.locator('h1')).toHaveCount(1)
   await expect(page.locator('header')).toBeVisible()
   await expect(page.locator('footer')).toBeVisible()
   const overflow=await page.evaluate(()=>document.documentElement.scrollWidth>window.innerWidth+2)
   expect(overflow).toBe(false)
  })
 }
 test('Desktop nav reveals premium dropdowns on hover and Blogs links directly',async ({page})=>{
  await page.setViewportSize({width:1440,height:900})
  await page.goto('http://localhost:3000/')
  await page.getByRole('button',{name:'Services'}).hover()
  await expect(page.getByRole('link',{name:'SEO + AI Visibility'}).first()).toBeVisible()
  await expect(page.getByRole('link',{name:'Blogs',exact:true})).toHaveAttribute('href','/blog/')
 })
 test('Shared AEC audit form preselects the relevant service on all four routes',async ({page})=>{
  const items:[string,string][]=[
   ['/services/ai-search-seo/','SEO + AI Visibility'],
   ['/services/website-design/','Website Design & Redesign'],
   ['/services/ai-automation/','AI Automation'],
   ['/services/lead-generation/','Paid Media & Social'],
  ]
  for (const [route,service] of items) {
   await page.goto('http://localhost:3000'+route)
   await expect(page.locator('select[name="goal"]').first()).toHaveValue(service)
   await expect(page.locator('input[name="consent"]').first()).toBeVisible()
  }
 })
 for (const viewport of viewports) {
  test(`Responsive preview at ${viewport.width}px`,async ({page})=>{
   await page.setViewportSize(viewport)
   for (const route of ['/','/services/','/industries/','/locations/florida/','/contact/','/blog/','/projects/']) {
    await page.goto('http://localhost:3000'+route,{waitUntil:'domcontentloaded'})
    const overflow=await page.evaluate(()=>document.documentElement.scrollWidth>window.innerWidth+2)
    expect(overflow,`horizontal overflow at ${route}, ${viewport.width}px`).toBe(false)
   }
  })
 }
 test('Generate full-page desktop and mobile review captures',async ({page})=>{
  for (const viewport of [{width:1440,height:900,name:'desktop'},{width:390,height:844,name:'mobile'}]) {
   await page.setViewportSize({width:viewport.width,height:viewport.height})
   for (const [route,slug] of [['/','home'],['/services/','services'],['/industries/','industries'],['/blog/','blog'],['/projects/','projects'],['/contact/','contact']] as const) {
    await page.goto('http://localhost:3000'+route,{waitUntil:'networkidle'})
    await page.screenshot({path:`test-results/aec-${slug}-${viewport.name}.png`,fullPage:true})
   }
  }
 })
})
