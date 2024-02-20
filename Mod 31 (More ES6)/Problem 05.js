const numbers = [33, 50, 79, 78, 90, 101, 30];
const divisibleByTen = numbers.filter(number => number % 10 === 0);
console.log(divisibleByTen);


const firstDivisibleByTen = numbers.find(number => number % 10 === 0);
console.log(firstDivisibleByTen);
