function TransMatrix(A) {
    let m = A.length, n = A[0].length, AT = [];
    for (let i = 0; i < n; i++) {
        AT[i] = [];
        for (let j = 0; j < m; j++) {
            AT[i][j] = A[j][i];
        }
    }
    return AT;
}

module.exports = TransMatrix;