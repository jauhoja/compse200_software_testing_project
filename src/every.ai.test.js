import every from './every.js'

describe('every', () => {
  it('returns true when every element passes the predicate', () => {
    expect(every([2, 4, 6], value => value % 2 === 0)).toBe(true)
  })

  it('returns false when an element fails the predicate', () => {
    expect(every([2, 3, 6], value => value % 2 === 0)).toBe(false)
  })

  it('returns true for empty or nullish input', () => {
    expect(every([], Boolean)).toBe(true)
    expect(every(null, Boolean)).toBe(true)
    expect(every(undefined, Boolean)).toBe(true)
  })

  it('passes each value, index, and original array to the predicate', () => {
    const values = ['a', 'b']
    const calls = []

    expect(every(values, (value, index, array) => {
      calls.push([value, index, array])
      return true
    })).toBe(true)
    expect(calls).toEqual([
      ['a', 0, values],
      ['b', 1, values]
    ])
  })

  it('stops checking after the first failing value', () => {
    const predicate = jest.fn(value => value < 3)

    expect(every([1, 3, 2], predicate)).toBe(false)
    expect(predicate).toHaveBeenCalledTimes(2)
  })
})
