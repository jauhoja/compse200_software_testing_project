import filter from './filter.js'

describe('filter', () => {
  test('returns only values accepted by the predicate', () => {
    const values = [1, 2, 3, 4, 5]

    expect(filter(values, value => value % 2 === 0)).toEqual([2, 4])
  })

  test('returns an empty array when no values match', () => {
    expect(filter([1, 2, 3], () => false)).toEqual([])
  })

  test.each([
    ['empty', []],
    ['null', null],
    ['undefined', undefined],
  ])('returns an empty array for %s input without invoking the predicate', (_label, input) => {
    const predicate = jest.fn(() => true)

    expect(filter(input, predicate)).toEqual([])
    expect(predicate).not.toHaveBeenCalled()
  })

  test('passes each value, its index, and the original array to the predicate', () => {
    const values = ['a', 'b']
    const predicate = jest.fn((value, index) => index === 1 && value === 'b')

    expect(filter(values, predicate)).toEqual(['b'])
    expect(predicate).toHaveBeenNthCalledWith(1, 'a', 0, values)
    expect(predicate).toHaveBeenNthCalledWith(2, 'b', 1, values)
  })

  test('uses predicate truthiness rather than requiring a boolean result', () => {
    expect(filter([0, 1, 2], value => value && 'included')).toEqual([1, 2])
  })

  test('returns a new array without modifying the input', () => {
    const values = [1, 2, 3]
    const result = filter(values, () => true)

    expect(result).toEqual(values)
    expect(result).not.toBe(values)
    expect(values).toEqual([1, 2, 3])
  })
})
