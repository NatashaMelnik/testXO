const TransMatrix = require('./transMatrix');
const TestDiagonal = require('./testDiagonal');
const TestLine = require('./testLine');

function TestVictory(field) {
    let fieldT = TransMatrix(field);

    let answ = TestDiagonal(field) || 
        TestLine(field) ||
        TestDiagonal(fieldT) || 
        TestLine(fieldT);

    return answ;
}

module.exports = TestVictory;
