import getBaseUrl from '../get-base-url'

afterEach(() => {
  delete process.env.VERCEL_URL
  delete process.env.OG_IMAGE_BASE_URL
})

test('it returns `OG_IMAGE_BASE_URL` or `VERCEL_URL` if available', () => {
  expect(getBaseUrl()).toBeUndefined()

  process.env.VERCEL_URL = 'vercel.url'
  expect(getBaseUrl()).toBe('https://vercel.url')

  process.env.OG_IMAGE_BASE_URL = 'test.url'
  expect(getBaseUrl()).toBe('test.url')
})

test('it prepends `https://` if using `VERCEL_URL`', () => {
  process.env.VERCEL_URL = 'vercel.url'
  expect(getBaseUrl()).toBe('https://vercel.url')
})
