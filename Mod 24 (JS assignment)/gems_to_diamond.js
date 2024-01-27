function GemsToDiamond(gems1, gems2, gems3) {
    const conversionRate = [21, 32, 43];

    let totalDiamond = (gems1 * conversionRate[0]) + (gems2 * conversionRate[1]) + (gems3 * conversionRate[2]);

    if (totalDiamond >= 2000) {
        let remainingDiamond = totalDiamond - 2000;
        return remainingDiamond;
    } else {
        return totalDiamond;
    }
}

// The spread operator is used to pass the elements of the array as individual arguments to the function.

let input1 = [1, 1, 1];
let output1 = GemsToDiamond(...input1);
console.log(`Input: ${input1}\nOutput: ${output1}\n`);

let input2 = [20, 200, 50];
let output2 = GemsToDiamond(...input2);
console.log(`Input: ${input2}\nOutput: ${output2}\n`);

let input3 = [100, 5, 1];
let output3 = GemsToDiamond(...input3);
console.log(`Input: ${input3}\nOutput: ${output3}\n`);
