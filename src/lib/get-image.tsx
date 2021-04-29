const chromium = require('chrome-aws-lambda')
const playwright = require('playwright-core')

export default async function getImage(
  baseUrl: string,
  path: string[],
): Promise<Buffer> {
  const browser = await playwright.chromium.launch({
    args: chromium.args,
    executablePath: await chromium.executablePath,
    headless: chromium.headless,
  })

  const context = await browser.newContext({
    viewport: {
      width: 2048,
      height: 1260,
    },
  })

  const page = await context.newPage()
  await page.goto([baseUrl, ...path].join('/'))
  const screenshot = await page.screenshot()
  await browser.close()
  return screenshot
}
