const TestLine = require('../moduls/testLine');

let testField = [['x', 'x', 'x'], ['o', 'o', 'o'], [' ', ' ', ' ']];


it('find first match', () => {
    expect(TestLine(testField)).toBe('xxx');
});

it('find first match', () => {
    expect(TestLine(testField)).not.toBe('ooo');
});