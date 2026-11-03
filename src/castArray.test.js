import castArray from './castArray.js'

describe('castArray', () => {
  test('wraps non-array values, including nullish values', () => {
    expect(castArray(1)).toEqual([1])
    expect(castArray(null)).toEqual([null])
    expect(castArray(undefined)).toEqual([undefined])
  })

  test('returns an existing array without copying it', () => {
    const array = [1, 2]
    expect(castArray(array)).toBe(array)
  })

  test('returns an empty array when called without arguments', () => {
    expect(castArray()).toEqual([])
  })
})
