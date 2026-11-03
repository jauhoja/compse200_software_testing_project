import divide from './divide.js'

describe('divide', () => {
  test('divides the first number by the second', () => {
    expect(divide(6, 4)).toBe(1.5)
    expect(divide(8, 2)).toBe(4)
  })

  test('handles division by zero and negative values', () => {
    expect(divide(1, 0)).toBe(Infinity)
    expect(divide(-6, 3)).toBe(-2)
  })

  test('coerces numeric strings', () => {
    expect(divide('6', '4')).toBe(1.5)
  })
})
