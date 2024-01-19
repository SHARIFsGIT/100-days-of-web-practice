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
