import endsWith from './endsWith.js'

describe('endsWith', () => {
  test('checks for a target at the end of a string', () => {
    expect(endsWith('abc', 'c')).toBe(true)
    expect(endsWith('abc', 'b')).toBe(false)
  })

  test('limits the search to the supplied position', () => {
    expect(endsWith('abc', 'b', 2)).toBe(true)
    expect(endsWith('abc', 'c', 2)).toBe(false)
  })

  test('handles empty targets and out-of-range positions', () => {
    expect(endsWith('abc', '')).toBe(true)
    expect(endsWith('abc', 'abc', 10)).toBe(true)
    expect(endsWith('abc', 'a', -1)).toBe(false)
    expect(endsWith('abc', 'a', NaN)).toBe(false)
  })
})
