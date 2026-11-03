import filter from './filter.js'

describe('filter', () => {
  test('returns values that pass the predicate in original order', () => {
    expect(filter([1, 2, 3, 4], value => value % 2 === 0)).toEqual([2, 4])
  })

  test('passes value, index, and original array to the predicate', () => {
    const array = ['a']
    const predicate = jest.fn(() => true)
    filter(array, predicate)
    expect(predicate).toHaveBeenCalledWith('a', 0, array)
  })

  test('returns an empty array if no values match or input is empty', () => {
    expect(filter([1, 3], value => value % 2 === 0)).toEqual([])
    expect(filter([], Boolean)).toEqual([])
    expect(filter(null, Boolean)).toEqual([])
  })

  test('does not mutate the source array', () => {
    const source = [1, 2, 3]
    filter(source, value => value > 1)
    expect(source).toEqual([1, 2, 3])
  })
})
