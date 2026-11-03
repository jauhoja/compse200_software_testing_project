import capitalize from './capitalize.js'

describe('capitalize', () => {
  test.each([
    ['FRED', 'Fred'],
    ['hello WORLD', 'Hello world'],
    ['', ''],
    ['éCLAIR', 'Éclair'],
  ])('capitalizes %j as %j', (input, expected) => {
    expect(capitalize(input)).toBe(expected)
  })

  test('converts nullish values to an empty string', () => {
    expect(capitalize(null)).toBe('')
    expect(capitalize(undefined)).toBe('')
  })
})
