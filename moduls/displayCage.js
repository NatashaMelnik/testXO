function DisplayCage(field) {
    let output = CreateStringField(field);
    console.log(output);
}

function CreateStringField(field) {
    let res = '';
    for (let i = 0; i < field.length; i++) {
        res = res + `|${field[i][0]}|${field[i][1]}|${field[i][2]}|` + '\n';
    }
    return res;
}


module.exports = DisplayCage;
module.exports = CreateStringField;