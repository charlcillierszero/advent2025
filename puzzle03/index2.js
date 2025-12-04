const fs = require('fs');

const input = fs.readFileSync('actual.in', 'utf-8');

const data = input.split('\r\n').map(row => row.split('').map(Number));

const allJoltage = [];

const getStartPosOfMaxDigit = (arr, start, end) => {
    const partialArr = arr.slice(start, end);
    return partialArr.indexOf(Math.max(...partialArr)) + start;
}

for (let i = 0; i < data.length; i++) {
    let previousMaxPos = 0;
    let currentJoltage = '';
    for (let k = 11; k >= 0; k--) {
        const posOfMaxDigit = getStartPosOfMaxDigit([...data[i]], previousMaxPos, data[i].length - k);
        currentJoltage = `${currentJoltage}${data[i][posOfMaxDigit]}`;
        previousMaxPos = posOfMaxDigit + 1;
    }

    allJoltage.push(Number(currentJoltage));
}

const totalJoltage = allJoltage.reduce((sum, val) => sum + val, 0);

console.log(totalJoltage);