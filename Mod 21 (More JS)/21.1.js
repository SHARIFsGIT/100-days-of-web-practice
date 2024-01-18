function inchToFeet(inches){
    const feet = inches / 12;
    return feet;
}
const myInches = 145;
const myFeet = inchToFeet(myInches);
console.log(myInches,'inch height is:', myFeet.toFixed(2), 'feet');



function mileToKM(miles){
    const KM = miles * 1.609;
    return KM;
}
const myMile = 2;
const myKM = mileToKM(myMile);
console.log(myMile,'miles =', myKM.toFixed(4), 'KM');