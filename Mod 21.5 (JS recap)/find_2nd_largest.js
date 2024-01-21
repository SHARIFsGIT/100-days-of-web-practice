function findSecondLargest(arr) {
    let largest = arr[0];
    let secondLargest = arr[1];

    if (largest < secondLargest) {
        [largest, secondLargest] = [secondLargest, largest];
    }

    for (let i = 2; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        } else if (arr[i] > secondLargest) {
            secondLargest = arr[i];
        }
    }
    return secondLargest;
}
const inputArray = [10, 33, 5, 99, 6];

const secondLargest = findSecondLargest(inputArray);
console.log(secondLargest);