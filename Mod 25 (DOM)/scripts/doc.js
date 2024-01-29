const sections = document.querySelectorAll('section');
// node elements in output so we'll also get for each
// get elements by class name -> for each doesn't work
for(const section of sections){
    section.style.border = '1px solid silver';

}

const placesContainer = document.getElementById('place');
placesContainer.style.backgroundColor = 'gray';

const changeColor = document.getElementById('place');
changeColor.classList.add('class');
changeColor.classList.remove('class');

const li = document.createElement('li');
li.innerText = 'Dynamic LI';
placesContainer.appendChild(li);