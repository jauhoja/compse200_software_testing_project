import isObjectLike from './isObjectLike.js'

describe('isObjectLike', () => {
  test('recognizes non-null objects but not functions', () => {
    expect(isObjectLike({})).toBe(true)
    expect(isObjectLike([])).toBe(true)
    expect(isObjectLike(new Date())).toBe(true)
    expect(isObjectLike(() => {})).toBe(false)
  })

  test('rejects null and primitive values', () => {
    expect(isObjectLike(null)).toBe(false)
    expect(isObjectLike(undefined)).toBe(false)
    expect(isObjectLike('x')).toBe(false)
    expect(isObjectLike(1)).toBe(false)
  })
})
