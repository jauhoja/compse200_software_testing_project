import countBy from './countBy.js'

describe('countBy', () => {
  test('counts array values by the iteratee result', () => {
    expect(countBy([6.1, 4.2, 6.3], Math.floor)).toEqual({ 6: 2, 4: 1 })
  })

  test('counts object values and passes values to the iteratee', () => {
    const collection = { a: { active: true }, b: { active: false }, c: { active: true } }
    expect(countBy(collection, value => value.active)).toEqual({ true: 2, false: 1 })
  })

  test('returns an empty object for an empty collection', () => {
    expect(countBy([], value => value)).toEqual({})
  })

  test('safely counts special property names', () => {
    expect(countBy([1, 2], () => '__proto__')).toEqual({ ['__proto__']: 2 })
  })
})
