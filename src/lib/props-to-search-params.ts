import Props from '../types/props'

export default function propsToSearchParams(props: Props): URLSearchParams {
  const searchParams = new URLSearchParams()

  Object.entries(props).forEach(([propName, values]) => {
    ;[].concat(values).forEach(value => {
      searchParams.append(propName, value)
    })
  })

  return searchParams
}
