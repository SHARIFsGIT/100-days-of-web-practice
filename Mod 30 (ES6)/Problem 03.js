const averageOfSquaredElements = (array) => {
    let sumOfSquaredElements = 0;
    let squareOfElements = [];
    for (const number of array) {
        let square = number * number;
        squareOfElements.push(square);
        sumOfSquaredElements += square;
    }
    console.log(squareOfElements);
    console.log(sumOfSquaredElements);
    return sumOfSquaredElements / array.length;
};
const numbers = [1, 2, 3, 4, 5];
const result = averageOfSquaredElements(numbers);
console.log(result);
