import slice from './slice.js'

describe('slice', () => {
  test('returns the requested start-to-end range without the end index', () => {
    expect(slice([1, 2, 3, 4], 1, 3)).toEqual([2, 3])
    expect(slice([1, 2, 3, 4], 2)).toEqual([3, 4])
  })

  test('supports negative indices', () => {
    expect(slice([1, 2, 3, 4], -2)).toEqual([3, 4])
    expect(slice([1, 2, 3, 4], 0, -1)).toEqual([1, 2, 3])
  })

  test('returns a dense independent result and handles empty inputs', () => {
    const result = slice([, 2], 0, 2)
    expect(result).toEqual([undefined, 2])
    expect(result).not.toBe(slice([], 0))
    expect(slice(null, 0)).toEqual([])
  })

  test('returns an empty array when start is after end', () => {
    expect(slice([1, 2, 3], 2, 1)).toEqual([])
  })
})
