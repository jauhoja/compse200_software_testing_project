import isEmpty from './isEmpty.js'

describe('isEmpty', () => {
  test('treats nullish values and primitives as empty', () => {
    expect(isEmpty(null)).toBe(true)
    expect(isEmpty(undefined)).toBe(true)
    expect(isEmpty(true)).toBe(true)
    expect(isEmpty(1)).toBe(true)
  })

  test('checks lengths for arrays and strings', () => {
    expect(isEmpty([])).toBe(true)
    expect(isEmpty([1])).toBe(false)
    expect(isEmpty('')).toBe(true)
    expect(isEmpty('abc')).toBe(false)
  })

  test('checks enumerable own properties for objects', () => {
    expect(isEmpty({})).toBe(true)
    expect(isEmpty({ a: 1 })).toBe(false)
    expect(isEmpty(Object.create({ inherited: 1 }))).toBe(true)
  })

  test('checks the sizes of maps and sets', () => {
    expect(isEmpty(new Map())).toBe(true)
    expect(isEmpty(new Map([['a', 1]]))).toBe(false)
    expect(isEmpty(new Set())).toBe(true)
    expect(isEmpty(new Set([1]))).toBe(false)
  })

  test('checks arguments, typed arrays, and buffers by length', () => {
    function args() { return arguments }
    expect(isEmpty(args())).toBe(true)
    expect(isEmpty(args(1))).toBe(false)
    expect(isEmpty(new Uint8Array())).toBe(true)
    expect(isEmpty(Buffer.alloc(1))).toBe(false)
  })
})
