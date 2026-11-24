import isEmpty from './isEmpty.js'

describe('isEmpty', () => {
  it('considers nullish values and primitive values empty', () => {
    expect(isEmpty(null)).toBe(true)
    expect(isEmpty(undefined)).toBe(true)
    expect(isEmpty(false)).toBe(true)
    expect(isEmpty(0)).toBe(true)
  })

  it('checks the length of arrays and strings', () => {
    expect(isEmpty([])).toBe(true)
    expect(isEmpty([1])).toBe(false)
    expect(isEmpty('')).toBe(true)
    expect(isEmpty('value')).toBe(false)
  })

  it('checks own enumerable properties on objects', () => {
    expect(isEmpty({})).toBe(true)
    expect(isEmpty({ value: 1 })).toBe(false)
  })

  it('checks the size of maps and sets', () => {
    expect(isEmpty(new Map())).toBe(true)
    expect(isEmpty(new Map([['key', 'value']]))).toBe(false)
    expect(isEmpty(new Set())).toBe(true)
    expect(isEmpty(new Set([1]))).toBe(false)
  })
})
