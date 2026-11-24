import toFinite from './toFinite.js'

describe('toFinite', () => {
  it('converts numbers and numeric strings', () => {
    expect(toFinite(3.2)).toBe(3.2)
    expect(toFinite(' 3.2 ')).toBe(3.2)
  })

  it('converts infinite values to the largest finite number', () => {
    expect(toFinite(Infinity)).toBe(Number.MAX_VALUE)
    expect(toFinite(-Infinity)).toBe(-Number.MAX_VALUE)
  })

  it('converts invalid numeric values to zero', () => {
    expect(toFinite(NaN)).toBe(0)
    expect(toFinite('not a number')).toBe(0)
  })

  it('preserves zero and converts other falsy values to zero', () => {
    expect(Object.is(toFinite(-0), -0)).toBe(true)
    expect(toFinite(0)).toBe(0)
    expect(toFinite(null)).toBe(0)
    expect(toFinite(false)).toBe(0)
  })
})
