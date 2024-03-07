function calculateTotalSales(array) {
    let totalSales = 0;
    for (let i = 0; i < array.length; i++) {
        const transaction = array[i];
        totalSales += transaction.perProduct * transaction.quantity;
    }
    return totalSales;
}

const salesTransactions = [
    { product: "Product1", perProduct: 100, quantity: 5 },
    { product: "Product2", perProduct: 150, quantity: 10 },
    { product: "Product3", perProduct: 250, quantity: 10 },
];

console.log(calculateTotalSales(salesTransactions)); 