function factorial(number){
    let result = 1;
    for (let i = 1; i <= number; i++) {
        result *= i;
        console.log(`Index: ${i} Result: ${result}`);
    }
    return result;
}
console.log('Final result:', factorial(5));




function factorialWithRecursive(n) {
    // Base case: factorial of 0 or 1 is 1
    if (n === 0 || n === 1) {
      return 1;
    } else {
      // Recursive case: n! = n * (n-1)!
      return n * factorialWithRecursive(n - 1);
    }
}
const number = 5;
const result = factorialWithRecursive(number);
console.log(`The factorial of ${number} is: ${result}`);




function factorialReverse(num) {
    let result = 1;
    for (let i = num; i >= 1; i--){
        result *= i;
    }
    return result;
}
const factNumber = 5;
const factorialResult = factorialReverse(factNumber);
console.log(`Factorial of ${factNumber} is ${factorialResult}`);




function factorialWithWhileLoop(numb) {
    let i = 1;
    let result = 1;
    while (i <= numb){
        result *= i;
        i++;
    }
    return result;
}
const numb = 5;
const factResult = factorialWithWhileLoop(numb);
console.log(`Factorial of ${numb} with while loop is ${factResult}`);