const xVic = 'xxx';
const oVic = 'ooo';

function TestDiagonal(currArr) {
    if (currArr[0][0].concat(currArr[1][1], currArr[2][2]) === xVic) {
        return xVic;
    }
    else if (currArr[0][2].concat(currArr[1][1], currArr[0][2]) === xVic) {
        return xVic;
    }
    else if (currArr[0][0].concat(currArr[1][1], currArr[2][2]) === oVic) {
        return oVic;
    }
    else if (currArr[0][2].concat(currArr[1][1], currArr[0][2]) === oVic) {
        return oVic;
    }
}

module.exports = TestDiagonal;