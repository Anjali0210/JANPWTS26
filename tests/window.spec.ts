// const productName = "iphone 13 pro"
// import { test, expect } from '@playwright/test';
//
// // test('window',async ({page})=> {
// //     await page.goto("https://practicetestautomation.com/practice-test-login/");
//
// //     await page.locator('input#username').fill('student');
//
// //     //await expect(page.getByLabel('Username')).toHaveValue('student');
// //     await expect(page.locator('input#username')).toHaveValue('student');
//
// // })
//
//
//
// test('windowE2Etest',async ({page})=> {
//     await page.goto("https://rahulshettyacademy.com/client")
//   await page.locator("#userEmail").pressSequentially("guptaanjali0210@gmail.com")
//   await page.locator("#userPassword").pressSequentially("Welcome@123")
//   await page.waitForTimeout(2000)
//   await page.locator("input#login").click()
//   await expect (page.locator("input#login")).toBeVisible()
//   await page.waitForTimeout(2000)
// await expect(page.locator(".fa-sign-out")).toBeVisible()
//
// //await page.getByText("iphone 13 pro")
// const products= await page.locator("div.card-body")
// //count() - return the number of element matching with the locator
// const itemcount=await products.count
// //parents to child concept is a locator chaining concept
//
//
// await products.nth(0).waitFor()
// await page.waitForTimeout(30000)
//
//
// for(let i=0;i<=itemcount.length;i++)
// {
//     const productText = await products.nth(i).locator("h5").textContent()
//
//     if(productText === productName){
//         await products.nth(i).locator("button").last().click()
//         break;
//     }
// }
//
// //await products.filter({hasText:'${productName}'}).locator("button").last().click()
// })
//
//
//
//
