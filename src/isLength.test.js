import isLength from './isLength.js'

describe('isLength', () => {
  test('accepts non-negative integer lengths up to the safe integer limit', () => {
    expect(isLength(0)).toBe(true)
    expect(isLength(3)).toBe(true)
    expect(isLength(Number.MAX_SAFE_INTEGER)).toBe(true)
  })

  test('rejects negative, fractional, unsafe, and non-number values', () => {
    expect(isLength(-1)).toBe(false)
    expect(isLength(1.5)).toBe(false)
    expect(isLength(Number.MAX_SAFE_INTEGER + 1)).toBe(false)
    expect(isLength('3')).toBe(false)
    expect(isLength(Infinity)).toBe(false)
    expect(isLength(NaN)).toBe(false)
  })
})
