const DisplayCage = require('./moduls/displayCage');
const TestVictory = require('./moduls/testVictory');
const DoStep = require('./moduls/doStep');

const xVic = 'xxx';
const oVic = 'ooo';

function main() {

    let field = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];

    let steps1 = [[0, 0], [0, 1], [1, 1], [0, 2], [2, 2]];

    DisplayCage(field);
    for (let i = 0; i < steps1.length + 10; i++) {

        if (!TestVictory(field)) {
            console.log('step ' + i)
            if (i % 2 === 0) {
                field = DoStep(field, steps1[i], 'x');
            }
            else {
                field = DoStep(field, steps1[i], 'o');
            }
        }
        else if (TestVictory(field) === xVic) {
            console.log('win X')
            break;
        }
        else if (TestVictory(field) === oVic) {
            console.log('win O')
            break;
        }
    }
}

main();