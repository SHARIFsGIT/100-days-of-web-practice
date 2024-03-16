const helloFromLocalStorage = localStorage.getItem('hello');
console.log(helloFromLocalStorage)

const setAge = () => {
    window.localStorage.setItem('age', 31)
}