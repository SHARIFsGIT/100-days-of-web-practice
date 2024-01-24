function findOddSum(arrOfNumbers) {
    let oddSum = 0;

    for (let i = 0; i < arrOfNumbers.length; i++) {
      if (arrOfNumbers[i] % 2 !== 0) {
        oddSum += arrOfNumbers[i];
      }
    }
    return oddSum;
}
const inputArray = [5, 7, 8, 10, 45, 30];
const result = findOddSum(inputArray);
console.log(result);
  