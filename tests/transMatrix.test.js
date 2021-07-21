const TransMatrix = require('../moduls/transMatrix');

test('work', () => {
    expect(TransMatrix([[1],[1]])).toEqual([[1, 1]]);
});

test('work with one element matrix', () => {
    expect(TransMatrix([[1]])).toEqual([[1]]);
});

test('work with null', () => {
    expect(TransMatrix([['']])).toEqual([['']]);
});

test('work with undefined', () => {
    expect(TransMatrix([[undefined]])).toEqual([[undefined]]);
});