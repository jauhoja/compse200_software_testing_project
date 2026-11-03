import toInteger from './toInteger.js'

describe('toInteger', () => {
  test('truncates fractional numbers toward zero', () => {
    expect(toInteger(3.9)).toBe(3)
    expect(toInteger(-3.9)).toBe(-3)
  })

  test('converts numeric strings and small fractions', () => {
    expect(toInteger('3.2')).toBe(3)
    expect(toInteger(Number.MIN_VALUE)).toBe(0)
  })

  test('converts non-finite values to finite integers', () => {
    expect(toInteger(Infinity)).toBe(Number.MAX_VALUE)
    expect(toInteger(-Infinity)).toBe(-Number.MAX_VALUE)
    expect(toInteger(NaN)).toBe(0)
  })
})
