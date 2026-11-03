import toFinite from './toFinite.js'

describe('toFinite', () => {
  test('converts numbers and numeric strings', () => {
    expect(toFinite(3.2)).toBe(3.2)
    expect(toFinite('3.2')).toBe(3.2)
    expect(toFinite('')).toBe(0)
  })

  test('converts infinities to the largest finite numbers', () => {
    expect(toFinite(Infinity)).toBe(Number.MAX_VALUE)
    expect(toFinite(-Infinity)).toBe(-Number.MAX_VALUE)
  })

  test('converts NaN and other non-numeric values to zero', () => {
    expect(toFinite(NaN)).toBe(0)
    expect(toFinite('not a number')).toBe(0)
    expect(toFinite(null)).toBe(0)
  })

  test('preserves positive and negative zero', () => {
    expect(Object.is(toFinite(0), 0)).toBe(true)
    expect(Object.is(toFinite(-0), -0)).toBe(true)
  })
})
