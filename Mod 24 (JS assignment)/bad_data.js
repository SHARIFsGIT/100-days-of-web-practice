function FindingBadData(arr) {
    let badDataCount = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            badDataCount++;
        }
    }
    return badDataCount;
}
let input1 = [1, 2, 5];
let output1 = FindingBadData(input1);
console.log(`Input: ${JSON.stringify(input1)}\nOutput: ${output1}\n`);

let input2 = [2, -5, -7, -13];
let output2 = FindingBadData(input2);
console.log(`Input: ${JSON.stringify(input2)}\nOutput: ${output2}\n`);

let input3 = [-4, -9, -5, -33, -55];
let output3 = FindingBadData(input3);
console.log(`Input: ${JSON.stringify(input3)}\nOutput: ${output3}\n`);