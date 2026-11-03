import toNumber from './toNumber.js'

describe('toNumber', () => {
  test('converts numeric primitives and trimmed strings', () => {
    expect(toNumber(3.2)).toBe(3.2)
    expect(toNumber(' 3.2 ')).toBe(3.2)
    expect(toNumber('')).toBe(0)
  })

  test('converts binary and octal strings and rejects signed hexadecimal', () => {
    expect(toNumber('0b101')).toBe(5)
    expect(toNumber('0o10')).toBe(8)
    expect(Number.isNaN(toNumber('-0x1'))).toBe(true)
  })

  test('converts objects using valueOf and supports numeric wrappers', () => {
    expect(toNumber(new Number(4))).toBe(4)
    expect(toNumber({ valueOf: () => 5 })).toBe(5)
  })

  test('returns NaN for symbols and invalid numeric strings', () => {
    expect(Number.isNaN(toNumber(Symbol('x')))).toBe(true)
    expect(Number.isNaN(toNumber('nope'))).toBe(true)
  })

  test('preserves negative zero', () => {
    expect(Object.is(toNumber('-0'), -0)).toBe(true)
  })
})
