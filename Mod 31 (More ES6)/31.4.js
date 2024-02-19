const numbers = [1, 2, 3, 4];
const result = numbers.forEach(n => console.log(n));
console.log(result) // cause no return value



const players = [71, 62, 73, 64, 85];
const selected = players.filter(p => p % 2 === 1);
console.log(selected) // cause no return value



const size = [71, 62, 73, 64, 85];
const keep = size.find(p => p > 70);
console.log(keep) // cause no return value