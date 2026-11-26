import words from './words.js'

describe('words for web-store product fields', () => {
  it('splits a product name and its color and size attributes', () => {
    expect(words('Classic Cotton T-Shirt, Navy Blue, Size L')).toEqual([
      'Classic',
      'Cotton',
      'T',
      'Shirt',
      'Navy',
      'Blue',
      'Size',
      'L'
    ])
  })

  it('separates labels and values in a text field of product details', () => {
    expect(
      words(
        'Brand: Acme; Material: recycled polyester; Color: forest green; Size: XL'
      )
    ).toEqual([
      'Brand',
      'Acme',
      'Material',
      'recycled',
      'polyester',
      'Color',
      'forest',
      'green',
      'Size',
      'XL'
    ])
  })

  it('keeps accented product terms and extracts the quantity and unit', () => {
    expect(words('Crème brûlée candle, 250 ml')).toEqual([
      'Crème',
      'brûlée',
      'candle',
      '250',
      'ml'
    ])
  })

  it('returns an empty array for an empty product field', () => {
    expect(words('')).toEqual([])
  })
})
