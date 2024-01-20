function checkTriangle(side1, side2, side3) {
    if (side1 === side2 && side1 === side3) {
        return 'No';
    }
    if (side1 === side2 || side1 === side3 || side2 === side3) {
        return 'Yes';
    } else {
        return 'No';
    }
}
console.log(checkTriangle(9, 8, 9));
console.log(checkTriangle(8, 8, 8));