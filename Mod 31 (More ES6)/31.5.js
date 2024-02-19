const players = [71, 62, 73, 64, 85];
const total = players.reduce((previous, current) => previous + current, 0) // 0 used for the initial value of sum
console.log(total)



const products = [
    {id: 1, name: 'John', age:50},
    {id: 2, name: 'Haki', age:46},
    {id: 3, name: 'Mitz', age:15},
    {id: 4, name: 'Luna', age:36}
]
// map
const names = products.map(product => product.name);
console.log(names)

// for each
products.forEach(product => console.log(product.id)); 

// filter
const filter = products.filter(product => product.age > 45);
console.log(filter)

// find
const find = products.find(product => product.age < 45);
console.log(find)

// reduce
const sum = products.reduce((acc, curr) => acc + curr.age, 0)
console.log(sum)