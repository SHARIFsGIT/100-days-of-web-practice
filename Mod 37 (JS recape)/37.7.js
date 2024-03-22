const addToLocalStorage = () => {
    const idInput = document.getElementById('id');
    const id = idInput.value;

    const valueInput = document.getElementById('value');
    const value = valueInput.value;

    if(id && value){
        localStorage.setItem(id, value);
    }
    idInput.value = '';
    valueInput.value = ''
};