# Next OG Image

Generate [Open Graph protocol](https://ogp.me) images for your website using
Next.js and React components.

Inspired by [Vercel's Open Graph image service](https://github.com/vercel/og-image) 🙂.

## Usage

### 1. Install the `next-og-image` package:

```
npm install next-og-image
```

### 2. Create a Next.js API route

The API route will generate and serve Open Graph images.

It can be placed in any directory inside of `pages/api`, but it must be named
`[...path].ts`.

For example:

```
pages/api/og-image/[...path].ts
```

Learn more about [Next.js API routes](https://nextjs.org/docs/api-routes/introduction)
and [catch-all routes](https://nextjs.org/docs/routing/dynamic-routes#catch-all-routes).

### 4. Initialise Next OG Image

Place the following code inside of the `[...path].ts` API route:

```ts
import { createHandler } from 'next-og-image'
const ogImageHandler = createHandler()
export default ogImageHandler
```

The `createHandler` function returns a Next.js API handler function.

### 5. Create a page to render an OG image

Next OG Image converts any Next.js page to a PNG image suitable for use as an
Open Graph image.

You can create a Next.js page at any location to render an OG image.

You may want to tell search engines not to index the page, because it's not
particularly useful beyond rendering an OG image.

The image generated is 2048x1260 pixels. You may need to make the contents of
you page larger than you'd expect. On my website, I have used the [`zoom` property](https://developer.mozilla.org/en-US/docs/Web/CSS/zoom)
to quickly and easily scale up my design system components.

Here is an example from my personal site: https://ash.gd/this-is-my-jam/28252440-993a-4096-9f7b-9588ff4374ac/og-image.

The PNG version can be accessed at: https://ash.gd/api/og-image/this-is-my-jam/28252440-993a-4096-9f7b-9588ff4374ac/og-image.png

### 6. Link to an OG image

Use the following URL structure to link to an OG image:

```
[url]/api/[apiRoute]/[ogPath].png
```

| Token    | Description                 | Example                                                      |
| -------- | --------------------------- | ------------------------------------------------------------ |
| url      | Website URL.                | https://ash.gd                                               |
| apiRoute | Path to OG image API route. | og-image                                                     |
| ogPath   | Path to OG image page.      | this-is-my-jam/28252440-993a-4096-9f7b-9588ff4374ac/og-image |

For example: https://ash.gd/api/og-image/this-is-my-jam/28252440-993a-4096-9f7b-9588ff4374ac/og-image.png

## Environment variables

Next OG Image must know your website URL in order to load a page to snapshot.

If you deploy to Vercel, this will be handled automatically using the
[`VERCEL_URL` environment variable](https://vercel.com/docs/environment-variables#system-environment-variables).

If you do not deploy to Vercel, are testing locally, or want to override the URL,
you can do so by setting the `OG_IMAGE_BASE_URL` environment variable.

## Caching

Generated images are cached by the CDN and the client for one year.
