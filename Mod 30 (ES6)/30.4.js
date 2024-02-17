// function declaration
function add (a, b) {
    return a + b;
}
const sum = add(1, 2);
console.log(sum);

// function expression or annonomus function declaration
const add2 = function (a, b) {
    return a + b;
}

// arrow function declaration
const add3 = (a, b) => a + b; // no return
const sum3 = add3(1, 2);
console.log(sum3);