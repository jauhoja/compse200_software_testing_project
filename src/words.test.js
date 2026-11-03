import words from './words.js'

describe('words', () => {
  test('splits ASCII words and ignores punctuation by default', () => {
    expect(words('fred, barney, & pebbles')).toEqual(['fred', 'barney', 'pebbles'])
  })

  test('recognizes camel case, acronyms, digits, and Unicode words', () => {
    expect(words('getHTTPResponse2')).toEqual(['get', 'HTTP', 'Response', '2'])
    expect(words('déjà vu')).toEqual(['déjà', 'vu'])
  })

  test('accepts a custom matching pattern', () => {
    expect(words('fred, barney, & pebbles', /[^, ]+/g)).toEqual(['fred', 'barney', '&', 'pebbles'])
  })

  test('returns an empty array when no words match', () => {
    expect(words('')).toEqual([])
    expect(words('!!!')).toEqual([])
    expect(words('abc', /[0-9]+/g)).toEqual([])
  })
})
