import toString from './toString.js'

describe('toString', () => {
  it('converts primitive values to strings and returns an empty string for nullish values', () => {
    expect(toString(42)).toBe('42')
    expect(toString(true)).toBe('true')
    expect(toString(null)).toBe('')
    expect(toString(undefined)).toBe('')
  })

  it('returns strings unchanged and converts nullish values in arrays to empty entries', () => {
    expect(toString('hello')).toBe('hello')
    expect(toString([1, null, undefined, 'four'])).toBe('1,,,four')
  })

  it('preserves the sign of negative zero', () => {
    expect(toString(-0)).toBe('-0')
    expect(toString(0)).toBe('0')
  })

  it('converts nested arrays and symbols', () => {
    expect(toString([1, [2, 3]])).toBe('1,2,3')
    expect(toString(Symbol('value'))).toBe('Symbol(value)')
  })
})
