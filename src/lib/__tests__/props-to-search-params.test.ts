import Props from '../../types/props'
import propsToSearchParams from '../props-to-search-params'

test('it adds every property from the props object to URLSearchParams', () => {
  const props: Props = {
    title: 'This Could Be Beautiful (It Is)',
    artist: 'Metronomy',
  }

  const searchParams = propsToSearchParams(props)

  expect(searchParams.get('title')).toBe(props.title)
  expect(searchParams.get('artist')).toBe(props.artist)
})

test('it adds array values from the props object to URLSearchParams', () => {
  const props: Props = {
    color: ['periwinkle', 'aquamarine'],
  }

  const searchParams = propsToSearchParams(props)
  expect(searchParams.getAll('color')).toEqual(props.color)
})
