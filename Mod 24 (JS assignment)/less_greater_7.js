function IsLGSeven(number) {
    let difference = (number - 7);

    if (difference < 7) {
        return difference;
    } else {
        return number * 2;
    }
}

let input1 = 6;
let output1 = IsLGSeven(input1);
console.log(`Input: ${input1}\nOutput: ${output1}\n`);

let input2 = -15;
let output2 = IsLGSeven(input2);
console.log(`Input: ${input2}\nOutput: ${output2}\n`);

let input3 = 15;
let output3 = IsLGSeven(input3);
console.log(`Input: ${input3}\nOutput: ${output3}\n`);
