import { test, expect } from '@playwright/test';

test('login page validation', async function ({page}) { 
  await page.goto("https://playwright.dev/");
  await page.getByRole('link',{name: 'Get started'}).click();
  await expect(page.getByRole('heading',{name:'Installation'})).toBeVisible();
})

test('login page validation1', async function ({page}) { 
  await page.goto("https://playwright.dev/");
  await page.goto("https://google.com/")
  
})

test('browser fixture', async function ({browser}) { 
const context= await browser.newContext()
const page=await context.newPage()
const page1=await context.newPage()

  await page.goto("https://playwright.dev/");
  await page1.goto("https://google.com/")
})
