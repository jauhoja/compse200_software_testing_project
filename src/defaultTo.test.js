import defaultTo from './defaultTo.js'

describe('defaultTo', () => {
  test('returns the original non-nullish value', () => {
    expect(defaultTo(1, 10)).toBe(1)
    expect(defaultTo(false, true)).toBe(false)
    expect(defaultTo(0, 10)).toBe(0)
    expect(defaultTo('', 'fallback')).toBe('')
  })

  test('uses the default for null and undefined', () => {
    expect(defaultTo(null, 10)).toBe(10)
    expect(defaultTo(undefined, 10)).toBe(10)
  })

  test('uses the default for NaN', () => {
    expect(defaultTo(NaN, 10)).toBe(10)
  })
})
