import compact from './compact.js'

describe('compact', () => {
  test('removes all falsey values and preserves truthy values in order', () => {
    expect(compact([0, 1, false, 2, '', 3, null, undefined, NaN])).toEqual([1, 2, 3])
  })

  test('returns an empty array when no values are truthy', () => {
    expect(compact([false, 0, ''])).toEqual([])
  })

  test('does not mutate the source array', () => {
    const source = [0, 'x', false]
    expect(compact(source)).toEqual(['x'])
    expect(source).toEqual([0, 'x', false])
  })
})
