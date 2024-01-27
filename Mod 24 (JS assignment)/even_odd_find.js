function EvenOdd(inputString) {
    let length = inputString.length;
    let result = (length % 2 === 0) ? 'Even' : 'Odd';
    return result;
}

let input1 = 'Phero';
let output1 = EvenOdd(input1);
console.log(`Input: ${input1}\nOutput: ${output1}\n`);

let input2 = 'Batch7';
let output2 = EvenOdd(input2);
console.log(`Input: ${input2}\nOutput: ${output2}\n`);

let input3 = 'Chatgpt';
let output3 = EvenOdd(input3);
console.log(`Input: ${input3}\nOutput: ${output3}\n`);
