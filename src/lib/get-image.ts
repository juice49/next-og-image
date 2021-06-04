import chrome from 'chrome-aws-lambda'
import puppeteer from 'puppeteer-core'
import Props from '../types/props'
import propsToSearchParams from './props-to-search-params'

export default async function getImage(
  baseUrl: string,
  path: string[],
  props: Props,
): Promise<Buffer | String | void> {
  const browser = await puppeteer.launch({
    args: chrome.args,
    executablePath:
      process.env.OG_IMAGE_CHROME_EXECUTABLE_PATH ??
      (await chrome.executablePath),
  })

  const page = await browser.newPage()
  page.setViewport({ width: 2048, height: 1260 })
  await page.goto(
    `${[baseUrl, ...path].join('/')}?${propsToSearchParams(props)}`,
  )
  const screenshot = await page.screenshot()
  await browser.close()
  return screenshot
}
