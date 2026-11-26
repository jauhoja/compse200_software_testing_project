import words from './words.js'

test("Separator “, ” should equal to ['abc', 'def', 'ghi'] ", () => {
    expect(words('abc, def, ghi')).toEqual(['abc', 'def', 'ghi']);
});

test("Separator “ ” should equal to ['abc', 'def', 'ghi']", () => {
    expect(words('abc def ghi')).toEqual(['abc', 'def', 'ghi']);
});

test("Separator “;” should equal to ['abc', 'def', 'ghi']", () => {
    expect(words('abc; def; ghi')).toEqual(['abc', 'def', 'ghi']);
});

test("Separator “”(no separator) should equal to ['abc', 'def', 'ghi']", () => {
    expect(words('abcdefghi')).toEqual(['abcdefghi']);
});

test("Non-ASCII characters should equal to ['ä', 'ö', 'å']", () => {
    expect(words('ä, ö, å')).toEqual(['ä', 'ö', 'å']);
});

test("Non-ASCII characters should equal to ['E222, E221']", () => {
    expect(words('E222, E221')).toEqual(['E220', 'E221']);
});

test("Number/not string should throw an error", () => {
    expect(() => words(222)).toThrow();
});