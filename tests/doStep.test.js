const DoStep = require('../moduls/doStep');

let testField = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];

describe('changing game field', () => {
    it('get only x or o', () => {
        expect(DoStep(testField, [0, 0], ' ')).toBe(undefined);
    });

    it('not beyond the field', () => {
        expect(DoStep(testField, [3, 3], ' ')).toBe(undefined);
    });

    // it('change the necessary sign', () => {
    //     expect(DoStep(testField, [0, 0], 'x')).toEqual(
    //         expect.arrayContaining(['x', ' ', ' ']));
    // });

});