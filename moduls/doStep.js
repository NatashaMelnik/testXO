const DisplayCage = require('./displayCage');

function DoStep(arr, stepArr, sign) {
    if (sign === 'x' || sign === 'o') {
        if ( TestChanginSize(stepArr[0], stepArr[0])) {
            arr[stepArr[0]][stepArr[1]] = sign;
            DisplayCage(arr);
            return arr;
        }
    }
}

function TestChanginSize(x, y) {
    if (-1 < x < 3 && -1 < y < 3) {
        return true;
    }
}

module.exports = DoStep;
