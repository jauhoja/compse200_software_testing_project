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
