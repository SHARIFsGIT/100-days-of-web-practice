function truthyCounter(arr) {
    return arr.filter(item => item === true).length;
}

console.log(truthyCounter([true, false, false, true, false]));
console.log(truthyCounter([false, false, false, false]));
console.log(truthyCounter([]));                           