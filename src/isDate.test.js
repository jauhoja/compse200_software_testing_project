import isDate from './isDate.js'

describe('isDate', () => {
  test('recognizes valid and invalid Date objects', () => {
    expect(isDate(new Date())).toBe(true)
    expect(isDate(new Date(NaN))).toBe(true)
  })

  test('rejects date strings and unrelated values', () => {
    expect(isDate('Mon April 23 2012')).toBe(false)
    expect(isDate({})).toBe(false)
    expect(isDate(null)).toBe(false)
  })
})
