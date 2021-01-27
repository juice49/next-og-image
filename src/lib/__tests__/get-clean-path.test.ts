import getCleanPath from '../get-clean-path'

test('it returns a copy of the path array with the extension removed from the final element', () => {
  const cleanPath = getCleanPath(['artists', 'goat-girl', 'og-image.png'])
  expect(cleanPath.path).toEqual(['artists', 'goat-girl', 'og-image'])
})

test('it returns the extension of the final element in the path array', () => {
  const cleanPath = getCleanPath(['artists', 'pan-amsterdam', 'og-image.png'])
  expect(cleanPath.extension).toBe('.png')
})
