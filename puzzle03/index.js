const fs = require('fs');

const input = fs.readFileSync('actual.in', 'utf-8');

const data = input.split('\r\n').map(row => row.split('').map(Number));

const allJoltage = [];

for (let i = 0; i < data.length; i++) {
    let maxJoltage = -1;
    for (let j = 0; j < data[i].length - 1; j++) {
        const firstJoltage = data[i][j] * 10;
        for (let k = j + 1; k < data[i].length; k++) {
            const currentJoltage = firstJoltage + data[i][k];
            if (currentJoltage > maxJoltage) {
                maxJoltage = currentJoltage;
            }
        }
    }

    allJoltage.push(maxJoltage);
}

const totalJoltage = allJoltage.reduce((sum, val) => sum + val, 0);

console.log(totalJoltage);