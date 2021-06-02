import chrome from 'chrome-aws-lambda'
import puppeteer from 'puppeteer-core'

export default async function getImage(
  baseUrl: string,
  path: string[],
): Promise<Buffer | String | void> {
  const browser = await puppeteer.launch({
    args: chrome.args,
    headless: chrome.headless,
    executablePath:
      process.env.CHROME_EXECUTABLE_PATH ?? (await chrome.executablePath),
  })

  const page = await browser.newPage()
  page.setViewport({ width: 2048, height: 1260 })
  await page.goto([baseUrl, ...path].join('/'))
  const screenshot = await page.screenshot()
  await browser.close()
  return screenshot
}
