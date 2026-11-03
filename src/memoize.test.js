import memoize from './memoize.js'

describe('memoize', () => {
  test('caches results using the first argument by default', () => {
    const func = jest.fn(value => value * 2)
    const memoized = memoize(func)
    expect(memoized(2)).toBe(4)
    expect(memoized(2)).toBe(4)
    expect(func).toHaveBeenCalledTimes(1)
    expect(memoized.cache.has(2)).toBe(true)
  })

  test('uses a resolver to create cache keys', () => {
    const func = jest.fn((left, right) => left + right)
    const memoized = memoize(func, (left, right) => `${left}:${right}`)
    expect(memoized(1, 2)).toBe(3)
    expect(memoized(1, 2)).toBe(3)
    expect(func).toHaveBeenCalledTimes(1)
  })

  test('preserves this when calling the original function', () => {
    const memoized = memoize(function(value) { return this.prefix + value })
    expect(memoized.call({ prefix: 'item-' }, 'a')).toBe('item-a')
  })

  test('allows explicit cache updates and rejects invalid functions', () => {
    const memoized = memoize(value => value)
    memoized.cache.set('x', 42)
    expect(memoized('x')).toBe(42)
    expect(() => memoize(null)).toThrow(TypeError)
    expect(() => memoize(() => {}, 'resolver')).toThrow(TypeError)
  })
})
