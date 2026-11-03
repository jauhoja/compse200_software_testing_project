import isTypedArray from './isTypedArray.js'

describe('isTypedArray', () => {
  test('recognizes supported typed arrays', () => {
    expect(isTypedArray(new Uint8Array(1))).toBe(true)
    expect(isTypedArray(new Float32Array(1))).toBe(true)
    expect(isTypedArray(new Int16Array(1))).toBe(true)
  })

  test('rejects ordinary arrays, data views, and non-objects', () => {
    expect(isTypedArray([])).toBe(false)
    expect(isTypedArray(new DataView(new ArrayBuffer(1)))).toBe(false)
    expect(isTypedArray(null)).toBe(false)
    expect(isTypedArray({})).toBe(false)
  })
})
