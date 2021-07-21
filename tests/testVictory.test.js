const TestVictory = require('../moduls/testVictory');

let testField = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];
let testFieldX = [['x', 'x', 'x'], ['o', 'o', 'o'], [' ', ' ', ' ']];
let testFieldO = [['o', 'o', 'o'], ['o', 'o', 'x'], ['o', 'o', 'x']];

describe('win combination test & continue game', () => {
    it('x won', () => {
        expect(TestVictory(testFieldX)).toBe('xxx');
    });

    it('o won', () => {
        expect(TestVictory(testFieldO)).toBe('ooo');
    });

    it('has not won yet', () => {
        expect(TestVictory(testField)).toBe(undefined);
    });

});