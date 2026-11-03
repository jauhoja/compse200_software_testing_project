import ceil from './ceil.js'

describe('ceil', () => {
  test('rounds upward at integer precision', () => {
    expect(ceil(4.006)).toBe(5)
    expect(ceil(-4.006)).toBe(-4)
    expect(ceil(4)).toBe(4)
  })

  test('supports positive and negative precision', () => {
    expect(ceil(6.004, 2)).toBe(6.01)
    expect(ceil(6040, -2)).toBe(6100)
    expect(ceil(-6040, -2)).toBe(-6000)
  })

  test('converts numeric strings and handles invalid numbers', () => {
    expect(ceil('4.1')).toBe(5)
    expect(Number.isNaN(ceil(NaN))).toBe(true)
  })
})
