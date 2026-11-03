import eq from './eq.js'

describe('eq', () => {
  test('compares primitive values with SameValueZero semantics', () => {
    expect(eq('a', 'a')).toBe(true)
    expect(eq(1, 1)).toBe(true)
    expect(eq(NaN, NaN)).toBe(true)
    expect(eq(0, -0)).toBe(true)
  })

  test('does not coerce different primitive types', () => {
    expect(eq(1, '1')).toBe(false)
    expect(eq(false, 0)).toBe(false)
  })

  test('compares objects by reference', () => {
    const value = {}
    expect(eq(value, value)).toBe(true)
    expect(eq({}, {})).toBe(false)
  })
})
