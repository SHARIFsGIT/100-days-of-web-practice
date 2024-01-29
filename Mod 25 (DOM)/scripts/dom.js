console.log('Hello from DOM.js');
console.log(document.getElementsByTagName('li'));

const liCollection = document.getElementsByTagName('li');
for (const li of liCollection) {
    console.log(li); // gives with tag
    console.log(li.innerText); // gives only text
}
const title = document.getElementById('title');
console.log(title);
console.log(title.innerText);
title.innerText = 'Connect'
title.style.backgroundColor = 'orange';
console.log(title.getAttribute('id'));
title.classList.add('title');
title.classList.remove('title');

const importants = document.getElementsByClassName('important');
for (const important of importants) {
    console.log(important); // gives with tag
    console.log(important.innerText); // gives only text
}

const someLi = document.querySelectorAll('.class li');
console.log(someLi);
for (const li of someLi) {
    console.log(li.innerText); 
    console.log(li.innerHTML); 
}

// querySelector('.class li'): gives only the first element