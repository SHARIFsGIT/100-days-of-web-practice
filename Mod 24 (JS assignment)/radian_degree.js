function radianToDegree(radian) {
    return radian * (180 / Math.PI).toFixed(3);
}
let radiansValue = 1.5;
let degreesResult = radianToDegree(radiansValue);
console.log(`${radiansValue} radians is approximately ${degreesResult} degrees.`);
