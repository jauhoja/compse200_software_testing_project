import isBoolean from './isBoolean.js'

describe('isBoolean', () => {
  test('recognizes boolean primitives and boxed booleans', () => {
    expect(isBoolean(true)).toBe(true)
    expect(isBoolean(false)).toBe(true)
    expect(isBoolean(Object(true))).toBe(true)
  })

  test('rejects other values', () => {
    expect(isBoolean(0)).toBe(false)
    expect(isBoolean('true')).toBe(false)
    expect(isBoolean(null)).toBe(false)
    expect(isBoolean({})).toBe(false)
  })
})
