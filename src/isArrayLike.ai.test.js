import isArrayLike from './isArrayLike.js'

describe('isArrayLike', () => {
  it('recognizes arrays, strings, and objects with valid lengths', () => {
    expect(isArrayLike([1, 2])).toBe(true)
    expect(isArrayLike('text')).toBe(true)
    expect(isArrayLike({ length: 0 })).toBe(true)
    expect(isArrayLike({ length: Number.MAX_SAFE_INTEGER })).toBe(true)
  })

  it('rejects nullish values and functions', () => {
    expect(isArrayLike(null)).toBe(false)
    expect(isArrayLike(undefined)).toBe(false)
    expect(isArrayLike(function () {})).toBe(false)
  })

  it('rejects lengths that are not valid non-negative safe integers', () => {
    expect(isArrayLike({ length: -1 })).toBe(false)
    expect(isArrayLike({ length: 1.5 })).toBe(false)
    expect(isArrayLike({ length: '2' })).toBe(false)
    expect(isArrayLike({ length: Number.MAX_SAFE_INTEGER + 1 })).toBe(false)
  })
})
