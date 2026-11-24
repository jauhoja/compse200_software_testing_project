import slice from './slice.js'

describe('slice', () => {
  it('returns the full array or a slice starting at the given index', () => {
    expect(slice([1, 2, 3])).toEqual([1, 2, 3])
    expect(slice([1, 2, 3, 4], 2)).toEqual([3, 4])
  })

  it('uses the end index as an exclusive bound', () => {
    expect(slice([1, 2, 3, 4], 1, 3)).toEqual([2, 3])
  })

  it('supports negative start and end indexes', () => {
    expect(slice([1, 2, 3, 4], -2)).toEqual([3, 4])
    expect(slice([1, 2, 3, 4], 0, -1)).toEqual([1, 2, 3])
  })

  it('returns an empty array for empty or nullish input', () => {
    expect(slice([])).toEqual([])
    expect(slice(null)).toEqual([])
    expect(slice(undefined)).toEqual([])
  })

  it('returns a dense array when the input contains a hole', () => {
    const values = [1, , 3]
    const result = slice(values)

    expect(result).toEqual([1, undefined, 3])
    expect(1 in result).toBe(true)
  })
})
