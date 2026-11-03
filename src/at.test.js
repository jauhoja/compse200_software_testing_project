import at from './at.js'

describe('at', () => {
  const object = { a: [{ b: { c: 3 } }, 4], 'a.b': 8 }

  test('reads nested and indexed paths', () => {
    expect(at(object, ['a[0].b.c', 'a[1]'])).toEqual([3, 4])
  })

  test('accepts multiple path arguments and preserves missing values', () => {
    expect(at(object, 'a[1]', 'missing')).toEqual([4, undefined])
  })

  test('supports array paths and literal keys', () => {
    expect(at(object, [['a', '0', 'b', 'c'], 'a.b'])).toEqual([3, 8])
  })

  test('handles a nullish object', () => {
    expect(at(null, 'a')).toEqual([undefined])
  })
})
