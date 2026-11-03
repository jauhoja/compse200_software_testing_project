import isSymbol from './isSymbol.js'

describe('isSymbol', () => {
  test('recognizes symbol primitives and boxed symbols', () => {
    expect(isSymbol(Symbol.iterator)).toBe(true)
    expect(isSymbol(Object(Symbol('value')))).toBe(true)
  })

  test('rejects strings and other values', () => {
    expect(isSymbol('abc')).toBe(false)
    expect(isSymbol(null)).toBe(false)
    expect(isSymbol({})).toBe(false)
    expect(isSymbol(1)).toBe(false)
  })
})
