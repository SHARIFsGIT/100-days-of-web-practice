// function add(num1, num2) {
//     const result = num1 + num2;
//     console.log(num1, num2, result);
//     return result;
// }
// const sum = add(1, 6);


// Default parameters
function add(num1, num2 = 6) {
    const result = num1 + num2;
    console.log(num1, num2, result);
    return result;
}
const sum = add(1, 60);

function fullName(first, last = '') {
    const full = first + ' ' + last;
    return full;
}

function friends(numbs = []){

}

function person(human = {}){

}