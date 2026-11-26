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
