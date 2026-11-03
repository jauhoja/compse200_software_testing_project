import isArguments from './isArguments.js'

describe('isArguments', () => {
  function getArguments() {
    return arguments
  }

  test('recognizes arguments objects', () => {
    expect(isArguments(getArguments(1, 2))).toBe(true)
  })

  test('rejects arrays and other values', () => {
    expect(isArguments([])).toBe(false)
    expect(isArguments({ length: 0 })).toBe(false)
    expect(isArguments(null)).toBe(false)
    expect(isArguments('arguments')).toBe(false)
  })
})
