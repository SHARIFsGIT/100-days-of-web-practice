const glass = {
    name: 'glass', 
    color: 'white', 
    price: 50, 
    isCleaned: true
};

console.log(glass)
const keys = Object.keys(glass)
console.log(keys)

const values = Object.values(glass)
console.log(values)

const pair = Object.entries(glass) // 2D array
console.log(pair)

// remove objects properties
delete glass.isCleaned;
console.log(glass)

// remove with distructuring but it creates a new object
const {price, ...rest} = glass
console.log(rest)

// freeze properties
Object.freeze(glass)
glass.source = 'Bangladesh'
delete glass.name;
glass.color = 'red'
console.log(glass)

// seal properties -> modify
Object.seal(glass)
glass.source = 'Bangladesh'
delete glass.name;
glass.color = 'red'
console.log(glass)