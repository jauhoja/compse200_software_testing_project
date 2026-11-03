import drop from './drop.js'

describe('drop', () => {
  test('drops one item by default or the requested number of items', () => {
    expect(drop([1, 2, 3])).toEqual([2, 3])
    expect(drop([1, 2, 3], 2)).toEqual([3])
  })

  test('returns an empty array when dropping the entire array or more', () => {
    expect(drop([1, 2], 2)).toEqual([])
    expect(drop([1, 2], 5)).toEqual([])
  })

  test('preserves all values for zero or negative counts', () => {
    expect(drop([1, 2], 0)).toEqual([1, 2])
    expect(drop([1, 2], -1)).toEqual([1, 2])
  })

  test('handles nullish and empty arrays', () => {
    expect(drop(null)).toEqual([])
    expect(drop([])).toEqual([])
  })
})
