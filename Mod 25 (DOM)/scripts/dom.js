console.log('Hello from DOM.js');
console.log(document.getElementsByTagName('li'));

const liCollection = document.getElementsByTagName('li');
for (const li of liCollection) {
    console.log(li); // gives with tag
    console.log(li.innerText); // gives only text
}