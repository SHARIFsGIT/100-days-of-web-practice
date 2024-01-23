function maxInArray(numbers){
    let largest = numbers[0];
    let smallest = numbers[0];

    for(let i=0; i<numbers.length; i++) {
        if(largest < numbers[i]){
            largest = numbers[i];
        }
        if(smallest > numbers[i]){
            smallest = numbers[i];
        }
    }
    return {largest, smallest};
}

const numbersArray = [5, 2, 9, 1, 7, 3];
const result = maxInArray(numbersArray);

console.log("Highest value:", result.largest);
console.log("Lowest value:", result.smallest);