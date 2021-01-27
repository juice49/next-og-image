import { extname, basename } from 'path'

export default function getCleanPath(
  path: string[],
): {
  path: string[]
  extension: string
} {
  const cleanPath = [...path]
  const finalElement = path[path.length - 1]
  const extension = extname(finalElement)

  cleanPath.splice(-1, 1, basename(finalElement, extension))

  return {
    path: cleanPath,
    extension,
  }
}
