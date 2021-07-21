const xVic = 'xxx';
const oVic = 'ooo';

function TestLine(field) {
    for (let i = 0; i < 3; i++) {
        if (field[i].join('') === xVic) {
            return xVic;
        }
        else if (field[i].join('') === oVic) {
            return oVic;
        }
    }
}

module.exports = TestLine;