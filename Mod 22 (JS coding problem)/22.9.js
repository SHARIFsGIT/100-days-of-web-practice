// fibonacci

const fibo = [0, 1];
for (let i = 2; i <= 7; i++){
    fibo[i] = fibo[i-1] + fibo[i-2];
}
console.log(fibo);




function fibonacciIterative(n) {
    let fib = [0, 1];
    
    for (let i = 2; i <= n; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }
    console.log(fib);
    return fib[n];
}
const resultIterative = fibonacciIterative(7);
console.log(resultIterative);