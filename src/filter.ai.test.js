import filter from './filter.js'

describe('filter', () => {
  test('returns strings out of a mixed array', () => {
    const array = ['asdf', 12, 23, 'qwer']

    expect(filter(array, value => typeof value === 'string'))
      .toStrictEqual(['asdf', 'qwer'])
  })

  test('returns all matches out of a string array', () => {
    const array = ['asdf', 'req', 'asdf', 'qwer']

    expect(filter(array, value => value === 'asdf'))
      .toStrictEqual(['asdf', 'asdf'])
  })

  test('handles a long string array', () => {
    const array = [
      ...Array.from({ length: 99 }, (_, index) => `item-${index}`),
      'fdsa'
    ]

    expect(filter(array, value => value === 'fdsa'))
      .toStrictEqual(['fdsa'])
  })

  test('returns an empty array when no strings match', () => {
    const array = ['asdf', 'req', 'asdf', 'qwer']

    expect(filter(array, value => value === 'lol'))
      .toStrictEqual([])
  })

  test('returns every even number from a number array', () => {
    const array = [1, 2, 3, 4, 5, 5, 4, 3, 2, 1]

    expect(filter(array, value => value % 2 === 0))
      .toStrictEqual([2, 4, 4, 2])
  })

  test('handles a predicate without a return value', () => {
    const array = ['asdf', 123]
    const predicate = () => {}

    expect(filter(array, predicate)).toStrictEqual([])
  })

  test('returns an empty array for empty input', () => {
    expect(filter([], value => value === 'asdf'))
      .toStrictEqual([])
  })
})
