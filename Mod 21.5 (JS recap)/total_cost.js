function totalCost(products) {
    let totalPrice = 0;
    for (let product of products) {
        totalPrice += product.price;
    }
    return totalPrice;
}

// Test cases
const cart1 = [
    { name: "Dano Milk", price: 500 },
    { name: "Taaza Tea", price: 200 },
    { name: 'Fresh Sugar', price: 300 }
];

const cart2 = [
    { name: "Samsung M33", price: 10000 },
    { name: "Samsung Charger", price: 500 },
    { name: "Haveit Speakers", price: 2500 }
];

console.log(totalCost(cart1)); // Output: 1000
console.log(totalCost(cart2)); // Output: 13000