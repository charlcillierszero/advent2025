const fs = require('fs');

const input = fs.readFileSync('actual.in', 'utf-8');

const idPairs = input.split(',').map(pair => {
    const [id1, id2] = pair.split('-').map(Number);
    return {id1, id2};
});

let totalSum = 0;

const GetRepeatingIdValue = (str) => {
    if (str.length % 2 === 0) {
        const halfLength = str.length / 2;
        const firstHalf = str.slice(0, halfLength);
        const secondHalf = str.slice(halfLength);

        if (firstHalf === secondHalf) {
            return +str;
        }
    }

    return 0;
}

idPairs.forEach(({id1, id2}) => {
    for (let i = id1; i <= id2; i++) {
        totalSum += GetRepeatingIdValue(i.toString());
    };
});

console.log(totalSum);