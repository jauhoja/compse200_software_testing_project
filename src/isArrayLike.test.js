import isArrayLike from './isArrayLike.js'

describe('isArrayLike', () => {
  test('recognizes arrays, strings, and objects with valid lengths', () => {
    expect(isArrayLike([1, 2])).toBe(true)
    expect(isArrayLike('abc')).toBe(true)
    expect(isArrayLike({ length: 0 })).toBe(true)
    expect(isArrayLike({ length: Number.MAX_SAFE_INTEGER })).toBe(true)
  })

  test('rejects functions and invalid length values', () => {
    expect(isArrayLike(() => {})).toBe(false)
    expect(isArrayLike({ length: -1 })).toBe(false)
    expect(isArrayLike({ length: 1.5 })).toBe(false)
    expect(isArrayLike({ length: Number.MAX_SAFE_INTEGER + 1 })).toBe(false)
    expect(isArrayLike({ length: '2' })).toBe(false)
  })

  test('rejects null and undefined', () => {
    expect(isArrayLike(null)).toBe(false)
    expect(isArrayLike(undefined)).toBe(false)
  })
})
