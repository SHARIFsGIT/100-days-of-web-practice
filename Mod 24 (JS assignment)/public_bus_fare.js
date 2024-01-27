function publicBusFare(peopleCount) {
    const reservedBusCapacity = peopleCount % 50;
    const microbusCapacity = reservedBusCapacity % 11;
    const publicBusCost = 250;

    return microbusCapacity * publicBusCost;
}

console.log(publicBusFare(65));
console.log(publicBusFare(129));
console.log(publicBusFare(263));