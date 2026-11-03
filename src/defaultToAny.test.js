import defaultToAny from './defaultToAny.js'

describe('defaultToAny', () => {
  test('returns the original value when it is present', () => {
    expect(defaultToAny(1, 10, 20)).toBe(1)
    expect(defaultToAny(false, 10)).toBe(false)
  })

  test('returns the first non-nullish default value', () => {
    expect(defaultToAny(undefined, null, 20, 30)).toBe(20)
    expect(defaultToAny(null, undefined, 'fallback')).toBe('fallback')
  })

  test('returns undefined if no value or default is supplied', () => {
    expect(defaultToAny()).toBeUndefined()
  })

  test('skips NaN values in favor of a default', () => {
    expect(defaultToAny(NaN, 10)).toBe(10)
  })
})
