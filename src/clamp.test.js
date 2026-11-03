import clamp from './clamp.js'

describe('clamp', () => {
  test('clamps values below and above the inclusive bounds', () => {
    expect(clamp(-10, -5, 5)).toBe(-5)
    expect(clamp(10, -5, 5)).toBe(5)
  })

  test('preserves values within the bounds and at either boundary', () => {
    expect(clamp(0, -5, 5)).toBe(0)
    expect(clamp(-5, -5, 5)).toBe(-5)
    expect(clamp(5, -5, 5)).toBe(5)
  })

  test('coerces numeric strings and treats invalid bounds as zero', () => {
    expect(clamp('3', '0', '5')).toBe(3)
    expect(clamp(3, NaN, 5)).toBe(3)
  })
})
