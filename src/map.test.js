import map from './map.js'

describe('map', () => {
  test('transforms each value in order', () => {
    expect(map([4, 8], value => value * value)).toEqual([16, 64])
  })

  test('passes value, index, and original array to the iteratee', () => {
    const array = ['a']
    const iteratee = jest.fn((value, index) => `${index}:${value}`)
    expect(map(array, iteratee)).toEqual(['0:a'])
    expect(iteratee).toHaveBeenCalledWith('a', 0, array)
  })

  test('returns a new empty array for empty or nullish input', () => {
    expect(map([], value => value)).toEqual([])
    expect(map(null, value => value)).toEqual([])
  })
})
