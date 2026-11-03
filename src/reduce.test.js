import reduce from './reduce.js'

describe('reduce', () => {
  test('reduces arrays when an initial accumulator is provided', () => {
    expect(reduce([1, 2, 3], (sum, value) => sum + value, 0)).toBe(6)
  })

  test('uses the first array element as the accumulator when omitted', () => {
    expect(reduce([1, 2, 3], (sum, value) => sum + value)).toBe(6)
  })

  test('reduces object values and provides their keys', () => {
    const result = reduce({ a: 1, b: 2 }, (acc, value, key) => {
      acc[key] = value * 2
      return acc
    }, {})
    expect(result).toEqual({ a: 2, b: 4 })
  })

  test('returns the initial value for an empty collection', () => {
    expect(reduce([], (sum, value) => sum + value, 5)).toBe(5)
    expect(reduce({}, (sum, value) => sum + value, 5)).toBe(5)
  })
})
