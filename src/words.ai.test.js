// Write tests for this function. Don't take into account other test files
// implmeneted in the codespace. Use you own consideration what would be the
// best things to test. Write the tests into words.ai2.test.js. The test
// framework in use is jest.

import words from './words.js'

describe('words', () => {
  it('splits ASCII text around punctuation and whitespace', () => {
    expect(words('fred, barney, & pebbles')).toEqual([
      'fred',
      'barney',
      'pebbles'
    ])
  })

  it('splits camel case, uppercase words, and digit boundaries', () => {
    expect(words('fooBar XML parser version2')).toEqual([
      'foo',
      'Bar',
      'XML',
      'parser',
      'version',
      '2'
    ])
  })

  it('recognizes accented words and emoji', () => {
    expect(words('café 😀')).toEqual(['café', '😀'])
  })

  it('returns an empty array when the input contains no words', () => {
    expect(words('')).toEqual([])
    expect(words('... -- !!!')).toEqual([])
  })

  it('uses a supplied regular expression to match words', () => {
    expect(words('fred, barney, & pebbles', /[^, ]+/g)).toEqual([
      'fred',
      'barney',
      '&',
      'pebbles'
    ])
  })

  it('accepts a string pattern and returns an empty array when it has no matches', () => {
    expect(words('fred and barney', 'a+')).toEqual(['a'])
    expect(words('fred and barney', /z+/g)).toEqual([])
  })
})
