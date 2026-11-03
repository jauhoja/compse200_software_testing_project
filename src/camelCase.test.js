import camelCase from './camelCase.js'

describe('camelCase', () => {
  test.each([
    ['Foo Bar', 'fooBar'],
    ['--foo-bar--', 'fooBar'],
    ['__FOO_BAR__', 'fooBar'],
    ["don't stop", 'dontStop'],
    ['XMLHttpRequest', 'xmlHttpRequest'],
    ['', ''],
  ])('converts %j to %j', (input, expected) => {
    expect(camelCase(input)).toBe(expected)
  })

  test('converts nullish input to an empty string', () => {
    expect(camelCase(null)).toBe('')
    expect(camelCase(undefined)).toBe('')
  })
})
