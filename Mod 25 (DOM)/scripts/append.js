const addMain = document.getElementById('main');

const addSection = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'My New Section';
addSection.appendChild(h1);
addMain.appendChild(addSection);

const addUl = document.createElement('ul');

const addLi1 = document.createElement('li');
addLi1.innerText = 'Biriani';
addUl.appendChild(addLi1);

const addLi2 = document.createElement('li');
addLi2.innerText = 'Chicken';
addUl.appendChild(addLi2);

addSection.appendChild(addUl);



const sectionDress = document.createElement('section');
sectionDress.innerHTML = `
<h1>My dress section</h1>
<ul>
    <li>Tshirt</li>
    <li>Pant</li>
</ul>
`
addMain.appendChild(sectionDress);