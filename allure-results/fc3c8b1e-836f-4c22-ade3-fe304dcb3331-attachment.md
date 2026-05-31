# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: uibasics.spec.ts >> handling alerts
- Location: tests/uibasics.spec.ts:70:5

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator: locator('#confirmReult')
Expected: "You selected Ok"
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toHaveText" with timeout 5000ms
  - waiting for locator('#confirmReult')

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - banner [ref=e3]:
    - link [ref=e4] [cursor=pointer]:
      - /url: https://demoqa.com
      - img [ref=e5]
  - generic [ref=e8]:
    - generic [ref=e11]:
      - generic [ref=e14] [cursor=pointer]:
        - generic [ref=e15]:
          - img [ref=e17]
          - text: Elements
        - img [ref=e22]
      - generic [ref=e26] [cursor=pointer]:
        - generic [ref=e27]:
          - img [ref=e29]
          - text: Forms
        - img [ref=e35]
      - generic [ref=e37]:
        - generic [ref=e39] [cursor=pointer]:
          - generic [ref=e40]:
            - img [ref=e42]
            - text: Alerts, Frame & Windows
          - img [ref=e47]
        - list [ref=e50]:
          - listitem [ref=e51] [cursor=pointer]:
            - link "Browser Windows" [ref=e52]:
              - /url: /browser-windows
              - img [ref=e53]
              - text: Browser Windows
          - listitem [ref=e55] [cursor=pointer]:
            - link "Alerts" [ref=e56]:
              - /url: /alerts
              - img [ref=e57]
              - text: Alerts
          - listitem [ref=e59] [cursor=pointer]:
            - link "Frames" [ref=e60]:
              - /url: /frames
              - img [ref=e61]
              - text: Frames
          - listitem [ref=e63] [cursor=pointer]:
            - link "Nested Frames" [ref=e64]:
              - /url: /nestedframes
              - img [ref=e65]
              - text: Nested Frames
          - listitem [ref=e67] [cursor=pointer]:
            - link "Modal Dialogs" [ref=e68]:
              - /url: /modal-dialogs
              - img [ref=e69]
              - text: Modal Dialogs
      - generic [ref=e73] [cursor=pointer]:
        - generic [ref=e74]:
          - img [ref=e76]
          - text: Widgets
        - img [ref=e82]
      - generic [ref=e86] [cursor=pointer]:
        - generic [ref=e87]:
          - img [ref=e89]
          - text: Interactions
        - img [ref=e94]
      - generic [ref=e98] [cursor=pointer]:
        - generic [ref=e99]:
          - img [ref=e101]
          - text: Book Store Application
        - img [ref=e106]
    - generic [ref=e109]:
      - heading "Alerts" [level=1] [ref=e110]
      - generic [ref=e111]:
        - generic [ref=e112]: Click Button to see alert
        - button "Click me" [ref=e114] [cursor=pointer]
      - generic [ref=e115]:
        - generic [ref=e116]: On button click, alert will appear after 5 seconds
        - button "Click me" [ref=e118] [cursor=pointer]
      - generic [ref=e119]:
        - generic [ref=e120]:
          - text: On button click, confirm box will appear
          - generic [ref=e121]: You selected Ok
        - button "Click me" [active] [ref=e123] [cursor=pointer]
      - generic [ref=e124]:
        - generic [ref=e125]: On button click, prompt box will appear
        - button "Click me" [ref=e127] [cursor=pointer]
  - contentinfo [ref=e134]:
    - generic [ref=e135]: © 2013-2026 TOOLSQA.COM | ALL RIGHTS RESERVED.
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('Login page application1',async ({page})=> { 
  4  |     await page.goto("https://practicetestautomation.com/practice-test-login/");
  5  | 
  6  |     await page.locator('input#username').fill('student');
  7  | 
  8  |     //await expect(page.getByLabel('Username')).toHaveValue('student');
  9  |     await expect(page.locator('input#username')).toHaveValue('student');
  10 | 
  11 | });
  12 | 
  13 | test('Test Radio',async ({page})=>{
  14 | 
  15 | await page.goto("https://demoqa.com/automation-practice-form")
  16 | await page.locator("#gender-radio-1").click()
  17 | //await page.getByRole('radio','{Name: "gender"}').click()
  18 | await expect(page.locator("#gender-radio-1")).toBeChecked()
  19 | 
  20 | 
  21 | await page.locator('#hobbies-checkbox-1').check()
  22 | await expect(page.locator("#hobbies-checkbox-1")).toBeChecked()
  23 | 
  24 | })
  25 | 
  26 | test('Text value from an element',async ({page})=> { 
  27 |     await page.goto("https://testautomationpractice.blogspot.com");
  28 | 
  29 |     const txt=await page.locator('h2.title').allTextContents();
  30 |     console.log(txt);
  31 | 
  32 |     //await expect(page.getByLabel('Username')).toHaveValue('student');
  33 |   
  34 | 
  35 | })
  36 | 
  37 | test('Static dropdown',async ({page})=> { 
  38 |     await page.goto("https://practice.expandtesting.com/dropdown");
  39 | 
  40 |   const dropdown=await page.locator('#country')
  41 |   await dropdown.selectOption("BH")
  42 |   await dropdown.selectOption({value: 'IN'})
  43 |   await page.waitForTimeout
  44 |   await dropdown.selectOption({label: 'India'})
  45 |     ///await expect(page.getByLabel('Username')).toHaveValue('student');
  46 |     await page.waitForTimeout
  47 |   await dropdown.selectOption({index: 156})
  48 | 
  49 |   await page.goto("https://demoqa.com/select-menu")
  50 |   await page.locator('#cars').selectOption(["volvo","saab"])
  51 |    await page.waitForTimeout
  52 |   await page.locator('#cars').selectOption([{value:'Opel'},{index: 1}])
  53 |   await page.waitForTimeout(2000)
  54 | 
  55 | 
  56 | })
  57 | 
  58 | test('Mouse operations',async ({page})=>{
  59 | 
  60 | await page.goto("https://demo.guru99.com/test/simple_context_menu")
  61 | // await page.getByText("Double-Click Me To See Alert").dblclick()
  62 | // await page.getByText("right click me",{exact:true}).click({button:'right'})
  63 | // await page.waitForTimeout(2000)
  64 | // await page.getByText("Delete",{ exact:true}).click()
  65 | // await page.waitForTimeout(2000)
  66 | 
  67 | })
  68 | 
  69 | 
  70 | test('handling alerts', async ({page})=>{
  71 | 
  72 |     await page.goto("https://demoqa.com/alerts")
  73 | 
  74 | let prompt="Testing";
  75 | 
  76 | await page.on("dialog",async (dialog)=>{
  77 |   dialog.message();
  78 |   dialog.accept(prompt)
  79 | })
  80 | 
  81 | 
  82 | await page.locator("#confirmButton").click()
  83 | await page.waitForTimeout(2000)
  84 | 
> 85 | await expect(page.locator("#confirmReult")).toHaveText("You selected Ok")
     |                                             ^ Error: expect(locator).toHaveText(expected) failed
  86 | 
  87 | })
  88 | 
  89 |  
  90 | 
  91 | 
  92 | 
  93 | 
  94 | 
```