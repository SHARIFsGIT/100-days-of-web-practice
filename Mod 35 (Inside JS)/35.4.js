console.log(1)
console.log(2)
// doSomething();
// setTimeout(doSomething)
setTimeout(doSomething, 1000)
setTimeout(() => {
    console.log(3.5)
}, 2000)
console.log(4)
console.log(5)

function doSomething() {
    console.log(3)
}