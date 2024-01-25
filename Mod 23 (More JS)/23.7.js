const shoppingCart = [
    {name: 'shoe', price: 1200},
    {name: 'shirt', price: 800},
    {name: 'pant', price: 1500},
    {name: 'belt', price: 1000}
];

function totalPrice(products){
    let sum = 0;
    for(var i = 0; i < products.length; i++){
        const product = products[i];
        sum += product.price;
    }
    return sum;
}

const expense = totalPrice(shoppingCart);
console.log('Total expense: ', expense);









const shoppingCartWithQuantity = [
    {name: 'shoe', price: 1200, quantity: 1},
    {name: 'shirt', price: 800, quantity: 4},
    {name: 'pant', price: 1500, quantity: 3},
    {name: 'belt', price: 1000, quantity: 5}
];

function totalPriceWithQuantity(products){
    let sum = 0;
    for(var i = 0; i < products.length; i++){
        const product = products[i];
        const productTotal = product.price * product.quantity;
        sum += productTotal;
    }
    return sum;
}

const expenseWithQuantity = totalPriceWithQuantity(shoppingCartWithQuantity);
console.log('Total expense: ', expenseWithQuantity);