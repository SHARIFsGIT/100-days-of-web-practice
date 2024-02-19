const data = [{id: 1, name: 'Sharif', address: 'Banasree'}];
console.log(data[0].address)


const products = {
    count: 5000,
    data: [
        {id: 1, name: 'Laptop'},
        {id: 2, name: 'Phone'}
    ]
}
console.log(products.data[1].name)


const user = {
    id: 6,
    name: 'Raj',
    address: {
        street: {
            block: 'E',
            road: 3,
            house: 12
        }
    }
}
console.log(user.address.street.house) // this is called chaining
console.log(user.address.street?.money) // optional chaining