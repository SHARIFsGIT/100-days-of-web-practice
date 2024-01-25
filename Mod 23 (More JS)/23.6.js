const phoneArray = [
    { name: 'Samsung', camera: 12, storage: '32gb', price: 36000, color: 'white' },
    { name: 'Walton', camera: 15, storage: '64gb', price: 26000, color: 'purple' },
    { name: 'iPhone', camera: 12, storage: '32gb', price: 40000, color: 'black' },
    { name: 'Oppo', camera: 20, storage: '128gb', price: 35000, color: 'gray' },
    { name: 'Nokia', camera: 18, storage: '32gb', price: 25000, color: 'green' }
];

function cheapestPhone(phones){
    let expensive = phones[0];
    let cheapest = phones[0];

    for (var i = 0; i < phones.length; i++){
        if(expensive.price < phones[i].price){
            expensive = phones[i];
        }
        if(cheapest.price > phones[i].price){
            cheapest = phones[i];
        }
    }
    return {expensive, cheapest};
}

const myPhone = cheapestPhone(phoneArray);

console.log("Expensive phone:", myPhone.expensive);
console.log("Cheapest phone:", myPhone.cheapest);