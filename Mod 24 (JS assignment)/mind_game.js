function MindGame(number) {
    let result = (((number * 3) + 10) / 2) - 5;
    return result;
}

let input1 = 5;
let output1 = MindGame(input1);
console.log(`Input: ${input1}\nOutput: ${output1}\n`);

let input2 = 50;
let output2 = MindGame(input2);
console.log(`Input: ${input2}\nOutput: ${output2}\n`);

let input3 = 33;
let output3 = MindGame(input3);
console.log(`Input: ${input3}\nOutput: ${output3}\n`);