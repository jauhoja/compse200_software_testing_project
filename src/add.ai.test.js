import add from './add.js'

describe('add', () => {
  it('adds two numbers', () => {
    expect(add(6, 4)).toBe(10)
  })

  it('concatenates values when either argument is a string', () => {
    expect(add('6', 4)).toBe('64')
    expect(add(1, '2')).toBe('12')
  })

  it('uses zero when both arguments are undefined', () => {
    expect(add()).toBe(0)
    expect(add(undefined, undefined)).toBe(0)
  })

  it('returns the supplied value when the other argument is undefined', () => {
    expect(add(7)).toBe(7)
    expect(add(undefined, 8)).toBe(8)
  })

  it('converts null arguments to zero', () => {
    expect(add(null, 5)).toBe(5)
  })
})
