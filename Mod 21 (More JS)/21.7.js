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
  