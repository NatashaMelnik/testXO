const TestDiagonal = require('../moduls/testDiagonal');
let testField = [['x', ' ', ' '], [' ', 'x', ' '], [' ', ' ', 'x']];

describe('changing game field', () => {
    it('can find diagonal', () => {
        expect(TestDiagonal(testField)).toBe('xxx');
    });

});