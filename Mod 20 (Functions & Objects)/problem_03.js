function make_avg(array, size) {
    if (size === 0){
        console.error('Array is empty');
        return undefined;
    }
    const sum = array.reduce((acc, num) => acc + num, 0);
    const average = sum / size;
    return average;
}
const numberArray = [10, 20, 30];
const arraySize = numberArray.length;
const result = make_avg(numberArray, arraySize);
console.log('Average:', result);