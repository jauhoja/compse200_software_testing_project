// Write a test for a function called words(). Import the function from ./words.js.
// Don't take into account any other files in this codespace. The function words()
// takes a string of words as an input and slices them to an array. The context is
// a web store. One of the use cases is to separate ingredients of the product
// from a text field to an array. Use your own consideration what would be the
// best things to test. Write the tests into words.ai3.test.js. The test framework
// in use is jest.

import words from './words.js'

describe('words for web-store ingredients', () => {
  it('splits a plain ingredient field into individual words', () => {
    expect(words('Water, sugar, cocoa.')).toEqual([
      'Water',
      'sugar',
      'cocoa'
    ])
  })

  it('preserves multi-word ingredients when given a comma-delimited pattern', () => {
    expect(
      words(
        'Cocoa butter, Cane sugar, Vanilla extract',
        /(?<=, )[^,]+|^[^,]+/g
      )
    ).toEqual(['Cocoa butter', 'Cane sugar', 'Vanilla extract'])
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
