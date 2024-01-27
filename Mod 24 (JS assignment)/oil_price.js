function oilPrice(diesel, petrol, octane) {

    let perLiterPrice = [114, 130, 135];

    const dieselCost = perLiterPrice[0] * diesel;
    const petrolCost = perLiterPrice[1] * petrol;
    const octaneCost = perLiterPrice[2] * octane;

    return {
        diesel: dieselCost,
        petrol: petrolCost,
        octane: octaneCost,
        total: dieselCost + petrolCost + octaneCost,
    };
}

let liters = [1, 1, 1];

let result = oilPrice(...liters);

console.log(`Cost of diesel: ${result.diesel} BDT`);
console.log(`Cost of petrol: ${result.petrol} BDT`);
console.log(`Cost of octane: ${result.octane} BDT`);
console.log(`Total cost of fuel: ${result.total} BDT`);
