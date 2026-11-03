import get from './get.js'

describe('get', () => {
  const object = { a: [{ b: { c: 3 } }], 'a.b': 8, nil: null }

  test('gets nested properties using string or array paths', () => {
    expect(get(object, 'a[0].b.c')).toBe(3)
    expect(get(object, ['a', '0', 'b', 'c'])).toBe(3)
  })

  test('uses the default only when the resolved value is undefined', () => {
    expect(get(object, 'missing.path', 'fallback')).toBe('fallback')
    expect(get(object, 'nil', 'fallback')).toBeNull()
  })

  test('supports literal keys and nullish objects', () => {
    expect(get(object, 'a.b')).toBe(8)
    expect(get(null, 'a.b', 'fallback')).toBe('fallback')
    expect(get({}, 'missing')).toBeUndefined()
  })
})
