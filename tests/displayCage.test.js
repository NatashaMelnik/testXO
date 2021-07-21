const CreateStringField = require('../moduls/displayCage');
let testField = [[' ', 'x', 'x'], ['x', ' ', 'x'], ['x', 'x', ' ']];

describe('display field', () => {
    it('render string', () => {
        expect(CreateStringField(testField)).toBe('| |x|x|\n|x| |x|\n|x|x| |\n');
    });

});