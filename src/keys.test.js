import keys from './keys.js'

describe('keys', () => {
  test('returns own enumerable keys and excludes inherited keys', () => {
    const prototype = { inherited: true }
    const value = Object.assign(Object.create(prototype), { a: 1, b: 2 })
    expect(keys(value)).toEqual(['a', 'b'])
  })

  test('returns indexed keys for array-like values', () => {
    expect(keys(['x', 'y'])).toEqual(['0', '1'])
    expect(keys('hi')).toEqual(['0', '1'])
  })

  test('coerces other primitives and handles nullish values', () => {
    expect(keys(3)).toEqual([])
    expect(keys(null)).toEqual([])
    expect(keys(undefined)).toEqual([])
  })
})
