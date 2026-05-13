import { test, expect } from '@playwright/test';

test('Login page application1',async ({page})=> { 
    await page.goto("https://practicetestautomation.com/practice-test-login/");

    await page.locator('input#username').fill('student');

    //await expect(page.getByLabel('Username')).toHaveValue('student');
    await expect(page.locator('input#username')).toHaveValue('student');

});

test('Test Radio',async ({page})=>{

await page.goto("https://demoqa.com/automation-practice-form")
await page.locator("#gender-radio-1").click()
//await page.getByRole('radio','{Name: "gender"}').click()
await expect(page.locator("#gender-radio-1")).toBeChecked()


await page.locator('#hobbies-checkbox-1').check()
await expect(page.locator("#hobbies-checkbox-1")).toBeChecked()

})

test('Text value from an element',async ({page})=> { 
    await page.goto("https://testautomationpractice.blogspot.com");

    const txt=await page.locator('h2.title').allTextContents();
    console.log(txt);

    //await expect(page.getByLabel('Username')).toHaveValue('student');
  

})

test('Static dropdown',async ({page})=> { 
    await page.goto("https://practice.expandtesting.com/dropdown");

  const dropdown=await page.locator('#country')
  await dropdown.selectOption("BH")
  await dropdown.selectOption({value: 'IN'})
  await page.waitForTimeout
  await dropdown.selectOption({label: 'India'})
    ///await expect(page.getByLabel('Username')).toHaveValue('student');
    await page.waitForTimeout
  await dropdown.selectOption({index: 156})

  await page.goto("https://demoqa.com/select-menu")
  await page.locator('#cars').selectOption(["volvo","saab"])
   await page.waitForTimeout
  await page.locator('#cars').selectOption([{value:'Opel'},{index: 1}])
  await page.waitForTimeout(2000)


})

test('Mouse operations',async ({page})=>{

await page.goto("https://demo.guru99.com/test/simple_context_menu")
// await page.getByText("Double-Click Me To See Alert").dblclick()
// await page.getByText("right click me",{exact:true}).click({button:'right'})
// await page.waitForTimeout(2000)
// await page.getByText("Delete",{ exact:true}).click()
// await page.waitForTimeout(2000)

})


test.only('handling alerts', async ({page})=>{

    await page.goto("https://demoqa.com/alerts")

let prompt="Testing";

await page.on("dialog",async (dialog)=>{
  dialog.message();
  dialog.accept(prompt)
})


await page.locator("#confirmButton").click()
await page.waitForTimeout(2000)

await expect(page.locator("#confirmReult")).toHaveText("You selected Ok")

})

 




