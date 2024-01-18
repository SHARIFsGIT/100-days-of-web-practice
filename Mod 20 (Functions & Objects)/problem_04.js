function odd_even_with_return(num) {
    return num % 2 === 0 ? 'Even' : 'Odd';
}
const result_with_return = odd_even_with_return(7);
console.log(result_with_return); // Output: Odd


function odd_even_with_return_no_param() {
    const num = 5;
    return num % 2 === 0 ? 'Even' : 'Odd';
}
const result_with_return_no_param = odd_even_with_return_no_param();
console.log(result_with_return_no_param); // Output: Odd


function odd_even_no_return(num) {
    const result = num % 2 === 0 ? 'Even' : 'Odd';
    console.log(result);
}
odd_even_no_return(8); // Output: Even


function odd_even_no_return_no_param() {
    const num = 10;
    const result = num % 2 === 0 ? 'Even' : 'Odd';
    console.log(result);
}
odd_even_no_return_no_param(); // Output: Even
