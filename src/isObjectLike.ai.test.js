import isObjectLike from './isObjectLike.js'

describe('isObjectLike', () => {
  it('recognizes objects, arrays, and dates', () => {
    expect(isObjectLike({})).toBe(true)
    expect(isObjectLike([1, 2])).toBe(true)
    expect(isObjectLike(new Date())).toBe(true)
  })

  it('rejects null, functions, and primitive values', () => {
    expect(isObjectLike(null)).toBe(false)
    expect(isObjectLike(function () {})).toBe(false)
    expect(isObjectLike('text')).toBe(false)
    expect(isObjectLike(1)).toBe(false)
    expect(isObjectLike(true)).toBe(false)
  })
})
