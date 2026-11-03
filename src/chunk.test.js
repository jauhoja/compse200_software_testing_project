import chunk from './chunk.js'

describe('chunk', () => {
  test('splits arrays into full chunks and a final partial chunk', () => {
    expect(chunk(['a', 'b', 'c', 'd'], 2)).toEqual([['a', 'b'], ['c', 'd']])
    expect(chunk(['a', 'b', 'c', 'd'], 3)).toEqual([['a', 'b', 'c'], ['d']])
  })

  test('defaults to chunks of one and does not mutate the source', () => {
    const source = [1, 2]
    const result = chunk(source)
    expect(result).toEqual([[1], [2]])
    expect(result).not.toBe(source)
    expect(source).toEqual([1, 2])
  })

  test('returns an empty array for empty input and non-positive sizes', () => {
    expect(chunk([], 2)).toEqual([])
    expect(chunk([1, 2], 0)).toEqual([])
    expect(chunk([1, 2], -1)).toEqual([])
  })

  test('converts fractional sizes to integers', () => {
    expect(chunk([1, 2, 3], 1.8)).toEqual([[1], [2], [3]])
  })
})
