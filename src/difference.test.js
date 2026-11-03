import difference from './difference.js'

describe('difference', () => {
  test('returns values in the first array absent from the other arrays', () => {
    expect(difference([2, 1], [2, 3])).toEqual([1])
    expect(difference([1, 2, 3, 4], [2], [4])).toEqual([1, 3])
  })

  test('uses SameValueZero equality and preserves duplicates in the first array', () => {
    expect(difference([NaN, 1, 1], [NaN])).toEqual([1, 1])
  })

  test('handles empty inputs and ignores non-array-like inputs', () => {
    expect(difference([], [1])).toEqual([])
    expect(difference(null, [1])).toEqual([])
  })

  test('does not remove distinct object references with equal contents', () => {
    const value = { a: 1 }
    expect(difference([value, { a: 1 }], [value])).toEqual([{ a: 1 }])
  })
})
