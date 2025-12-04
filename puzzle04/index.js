const fs = require('fs');

const input = fs.readFileSync('actual.in', 'utf-8');

const matrix = input.split('\r\n').map(line => line.split(''));

const getCoords = (row, col, rowMax, colMax) => {
    const coords = [];
    if (row - 1 >= 0 && col - 1 >= 0) coords.push([row - 1, col - 1]);
    if (row - 1 >= 0) coords.push([row - 1, col]);
    if (row - 1 >= 0 && col + 1 < colMax) coords.push([row - 1, col + 1]);
    if (col - 1 >= 0) coords.push([row, col - 1]);
    if (col + 1 < colMax) coords.push([row, col + 1]);
    if (row + 1 < rowMax && col - 1 >= 0) coords.push([row + 1, col - 1]);
    if (row + 1 < rowMax) coords.push([row + 1, col]);
    if (row + 1 < rowMax && col + 1 < colMax) coords.push([row + 1, col + 1]);
    return coords;
}

const duplucateMatrix = (matrix) => {
    return matrix.map(row => row.map(cell => cell));
}

const rowMax = matrix.length;
const colMax = matrix[0].length;
let totalCount = 0;
let totalRemoved = 0;
let nextMatrix = duplucateMatrix(matrix);
do {
    totalRemoved = 0;
    const currentMatrix = duplucateMatrix(nextMatrix);
    for (let row = 0; row < currentMatrix.length; row++) {
        for (let col = 0; col < currentMatrix[row].length; col++) {
            if (currentMatrix[row][col] === '.') {
                continue;
            }
            const currentCoords = getCoords(row, col, rowMax, colMax);
            let totalOpenSpaces = 0;
            for (const [r, c] of currentCoords) {
                if (currentMatrix[r][c] === '@') {
                    totalOpenSpaces++;
                }
            }
            if (totalOpenSpaces < 4) {
                totalCount++;
                totalRemoved++;
                nextMatrix[row][col] = '.';
            }
        }
    }
} while (totalRemoved > 0);

console.log(totalCount);