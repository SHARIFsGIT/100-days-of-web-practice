const findMaxNumber = (arr1, arr2) => {
    const combinedArray = [...arr1, ...arr2];
    console.log(combinedArray);
    return Math.max(...combinedArray);
};
const array1 = [1, 3, 5, 7];
const array2 = [2, 4, 6, 8];
const maxNumber = findMaxNumber(array1, array2);
console.log(maxNumber);
