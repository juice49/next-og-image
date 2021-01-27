export default function getBaseUrl(): string | undefined {
  if (process.env.OG_IMAGE_BASE_URL) {
    return process.env.OG_IMAGE_BASE_URL
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`
  }
}
