// using for loop
const oddArray = [1, 3, 4, 7, 9];
const evenArray = [];

for (var i = 0; i < oddArray.length; i++){
    evenArray.push(oddArray[i] + 1);
}
console.log(evenArray)


// using map
const evenArr = oddArray.map(number => number + 1);
console.log(evenArr)