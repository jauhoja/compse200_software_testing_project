import every from './every.js'

describe('every', () => {
  test('returns true when all elements satisfy the predicate', () => {
    expect(every([2, 4, 6], value => value % 2 === 0)).toBe(true)
  })

  test('stops at the first failing predicate', () => {
    const predicate = jest.fn(value => value < 3)
    expect(every([1, 2, 3, 4], predicate)).toBe(false)
    expect(predicate).toHaveBeenCalledTimes(3)
  })

  test('passes value, index, and original array to the predicate', () => {
    const array = ['a']
    const predicate = jest.fn(() => true)
    every(array, predicate)
    expect(predicate).toHaveBeenCalledWith('a', 0, array)
  })

  test('returns true for empty or nullish input', () => {
    expect(every([], Boolean)).toBe(true)
    expect(every(null, Boolean)).toBe(true)
  })
})
