import { launchChromium } from 'playwright-aws-lambda'

export default async function getImage(
  baseUrl: string,
  path: string[],
): Promise<Buffer> {
  const browser = await launchChromium({ headless: true })

  const context = await browser.newContext({
    viewport: {
      width: 2048,
      height: 1260,
    },
  })

  const page = await context.newPage()
  await page.goto([baseUrl, ...path].join('/'))
  return page.screenshot()
}
