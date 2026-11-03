import add from './add.js'

test('Addition 1 + 1 should equal 2', () => {
    expect(add(1,1)).toBe(2);
});

describe('add', () => {
    test.each([
        [6, 4, 10],
        [-6, 4, -2],
        [1.5, 2.25, 3.75],
        [0, 0, 0],
    ])('adds %p and %p to get %p', (augend, addend, expected) => {
        expect(add(augend, addend)).toBe(expected);
    });
});
