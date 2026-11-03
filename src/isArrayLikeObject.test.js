import isArrayLikeObject from './isArrayLikeObject.js'

describe('isArrayLikeObject', () => {
  test('recognizes array-like objects', () => {
    expect(isArrayLikeObject([1, 2])).toBe(true)
    expect(isArrayLikeObject({ 0: 'x', length: 1 })).toBe(true)
    expect(isArrayLikeObject(new Uint8Array(2))).toBe(true)
  })

  test('rejects primitives, functions, and invalid lengths', () => {
    expect(isArrayLikeObject('abc')).toBe(false)
    expect(isArrayLikeObject(() => {})).toBe(false)
    expect(isArrayLikeObject({ length: -1 })).toBe(false)
    expect(isArrayLikeObject(null)).toBe(false)
  })
})
