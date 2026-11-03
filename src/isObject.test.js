import isObject from './isObject.js'

describe('isObject', () => {
  test('recognizes objects, arrays, and functions', () => {
    expect(isObject({})).toBe(true)
    expect(isObject([])).toBe(true)
    expect(isObject(() => {})).toBe(true)
    expect(isObject(new Number(0))).toBe(true)
  })

  test('rejects null and primitive values', () => {
    expect(isObject(null)).toBe(false)
    expect(isObject(undefined)).toBe(false)
    expect(isObject('x')).toBe(false)
    expect(isObject(1)).toBe(false)
    expect(isObject(Symbol('x'))).toBe(false)
  })
})
