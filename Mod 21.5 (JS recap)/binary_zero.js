const countZeros = (binaryString) => {
    let zeroCount = 0;

    for (let i = 0; i < binaryString.length; i++) {
        if (binaryString[i] === '0') {
            zeroCount++;
        }
    }
    return zeroCount;
};
const binaryString = '10101';

const result = countZeros(binaryString);
console.log(result);
