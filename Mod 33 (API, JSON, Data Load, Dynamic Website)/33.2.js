// JavaScript Object Notation (JSON)
const user = {id: 1, name: 'John', job: 'Admin'};

const stringified = JSON.stringify(user)
console.log(user)
console.log(stringified)





const shop = {
    owner: 'John',
    address: {
        street: 'Street',
        city: 'City',
        country: 'United States',
    },
    products: ['Laptop', 'Mobile', 'Restaurant'],
    revenue: 500,
    isOpen: true,
    isNew: true
}
console.log(shop)
console.log(JSON.stringify(shop))
console.log(JSON.parse(JSON.stringify(shop)))
