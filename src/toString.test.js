import toString from './toString.js'

describe('toString', () => {
  test('converts primitive values and nullish values', () => {
    expect(toString(1)).toBe('1')
    expect(toString(true)).toBe('true')
    expect(toString(null)).toBe('')
    expect(toString(undefined)).toBe('')
  })

  test('preserves negative zero and converts symbols', () => {
    expect(toString(-0)).toBe('-0')
    expect(toString(Symbol('value'))).toBe('Symbol(value)')
  })

  test('converts arrays recursively', () => {
    expect(toString([1, null, [2, undefined]])).toBe('1,,2,')
    expect(toString([])).toBe('')
  })

  test('returns strings without alteration', () => {
    expect(toString('already a string')).toBe('already a string')
  })
})
