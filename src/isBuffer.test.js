import isBuffer from './isBuffer.js'

describe('isBuffer', () => {
  test('recognizes Node buffers', () => {
    expect(isBuffer(Buffer.from([1, 2]))).toBe(true)
  })

  test('does not classify other byte arrays or values as buffers', () => {
    expect(isBuffer(new Uint8Array(2))).toBe(false)
    expect(isBuffer([])).toBe(false)
    expect(isBuffer(null)).toBe(false)
  })
})
