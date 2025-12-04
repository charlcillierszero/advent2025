const fs = require('fs');

const data = fs.readFileSync('actual.in', 'utf-8');
const lines = data.split('\r\n');

const parsed = lines.map(line => {
    const direction = line[0];
    const value = line.slice(1);
    return { direction, value };
});

let currentPos = 50;
let total0 = 0;

for (let i = 0; i < parsed.length; i++) {
    const { direction, value } = parsed[i];
    const steps = +value;
    const delta = direction === 'R' ? 1 : -1;

    for (let s = 0; s < steps; s++) {
        currentPos = (currentPos + delta + 100) % 100;
        if (currentPos === 0) total0++;
    }
}

console.log(total0);