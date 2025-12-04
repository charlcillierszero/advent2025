const fs = require('fs');

const input = fs.readFileSync('actual.in', 'utf-8');

const idPairs = input.split(',').map(pair => {
    const [id1, id2] = pair.split('-').map(Number);
    return {id1, id2};
});

let totalSum = 0;

const GetRepeatingIdValue = (str) => {
    let totalValue = 0;
    const alreadyFound = [];

    for (let i = 2; i <= str.length; i++) {
        if (str.length % i === 0) {
            const segmentLength = str.length / i;
            let currentSegment = str.slice(0, segmentLength);
            let allEqual = true;
            for (let j = 1; j < i; j++) {
                const nextSegment = str.slice(j * segmentLength, (j + 1) * segmentLength);
                if (nextSegment !== currentSegment) {
                    allEqual = false;
                    break;
                }
            }

            if (allEqual && !alreadyFound.includes(str)) {
                console.log(`Found repeating segment in ${str}`);
                totalValue += +str;
                alreadyFound.push(str);
            }
        }
    }

    return totalValue;
}

idPairs.forEach(({id1, id2}) => {
    for (let i = id1; i <= id2; i++) {
        totalSum += GetRepeatingIdValue(i.toString());
    };
});

console.log(totalSum);