// Write a test for a function called words(). Import thr function from ./words.js.
// Don't take into account any other files in this codespace. The function words()
// takes a string of words as an input and slices them to an array. The context is
// a web store. One of the use cases is to separate ingredients of the product
// from a text field to an array. Use your own consideration what would be the
// best things to test but don't focus only to test that would pass. Write the
// tests into words.ai4.test.js. The test framework in use is jest. Add the promt
// to the file as a comment.

import words from './words.js'

describe('words for web-store ingredients', () => {
  it('splits a simple ingredient field into individual words', () => {
    expect(words('Water, sugar, cocoa.')).toEqual([
      'Water',
      'sugar',
      'cocoa'
    ])
  })

  it('preserves multi-word ingredients in a comma-separated ingredient field', () => {
    expect(words('Water, cane sugar, cocoa butter')).toEqual([
      'Water',
      'cane sugar',
      'cocoa butter'
    ])
  })

  it('can preserve multi-word ingredients when given a comma delimiter pattern', () => {
    expect(
      words(
        'Water, cane sugar, cocoa butter',
        /(?<=, )[^,]+|^[^,]+/g
      )
    ).toEqual(['Water', 'cane sugar', 'cocoa butter'])
  })

  it('handles accented ingredient names', () => {
    expect(words('Café extract, crème powder')).toEqual([
      'Café',
      'extract',
      'crème',
      'powder'
    ])
  })

  it('returns an empty array for an empty or punctuation-only field', () => {
    expect(words('')).toEqual([])
    expect(words(';, .')).toEqual([])
  })
})
