import upperFirst from './upperFirst.js'

describe('upperFirst', () => {
  test('uppercases only the first character', () => {
    expect(upperFirst('fred')).toBe('Fred')
    expect(upperFirst('FRED')).toBe('FRED')
    expect(upperFirst('hello world')).toBe('Hello world')
  })

  test('handles empty and Unicode strings', () => {
    expect(upperFirst('')).toBe('')
    expect(upperFirst('éclair')).toBe('Éclair')
  })
})
