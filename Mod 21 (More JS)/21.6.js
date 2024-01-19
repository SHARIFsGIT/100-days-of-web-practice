function getOdd(numbers) {
    const oddNumbers = [];
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 !== 0) {
            console.log(numbers[i]);
            oddNumbers.push(numbers[i]);
        }
    }
    return oddNumbers;
}
const myNumbers = [12, 13, 14, 15, 16, 17, 18, 19, 20];
const oddArray = getOdd(myNumbers);
console.log(oddArray);


function getSum(numbers){
    let sum = 0;
    for(let i=0; i<numbers.length; i++){
        const index = i;
        const element = numbers[index];
        sum += element;
        console.log('Index:',index, 'Value:', element, 'Sum:', sum);
    }
    return sum;
}
const oddArraySum = getSum(oddArray);
console.log(oddArraySum);
