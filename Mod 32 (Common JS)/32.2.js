// undefined

// 01. Variable that is not initialized
let first;
console.log(first)

// 02. Function that has no return value
function second(a, b){
    const total = a + b;
}
const result = second();
console.log(result)

// 03. Function that has no arguments
function third(a, b, c, d){
    console.log(a, b, c, d)
}
third(2, 5);

// 04. If return has nothing on the right side
function noNegative(a, b){
    if (a < 0 || b < 0){
        return;
    }
    return a + b;
}
const sum = noNegative(2, -5);
console.log(sum)

// 05. Property that does not exist
const fifth = {id: 2, name: 'Bindo', age: 40}
console.log(fifth.name, fifth.salary);

// 06. Accessing array elements out of the array index
const sixth = [4, 5, 6, 7, 8, 9]
console.log(sixth[4], sixth[6])

// 07. Deleteing array elements
const seven = [4, 5, 6, 7, 8, 9]
delete(seven[1]); // makes a hole in the array. use splice instead
console.log(seven)

// 08. Set a value directly undefined
const eight = undefined;
// better use null
const nine = null;

const data = {results:[], updated: null}

console.log(typeof undefined)
console.log(typeof null)