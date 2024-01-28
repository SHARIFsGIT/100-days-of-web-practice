const numbers = [1, 2, 3, 4, 5];

for (var i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    console.log(number);
};

// for of loop
for (const number of numbers) {
    console.log(number);
}


const products =[
    {id: 1, name: 'Samsung', price:5000, year: 2000},
    {id: 2, name: 'iPhone', price:2000, year: 2003},
    {id: 3, name: 'MI', price:15000, year: 2005},
    {id: 4, name: 'VIVO phone', price:5600, year: 2007},
    {id: 5, name: 'Simpony', price:5700, year: 2009},
    {id: 6, name: 'Razer', price:9000, year: 2010}
];

for (const product of products) {
    console.log(product);
}


function matchedProducts (products, search) {
    const matchedProducts = [];
    for (const product of products) {
        if(product.name.toLowerCase().includes(search.toLowerCase())) {
            matchedProducts.push(product);
        }
    }
    return matchedProducts;
}
const result = matchedProducts(products, 'phone');
console.log(result)