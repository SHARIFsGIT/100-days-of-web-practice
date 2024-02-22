function loadUsers() {
    const url = 'https://jsonplaceholder.typicode.com/users';
    fetch(url).then(response => response.json()).then(json => displayUsers(json));
}

function displayUsers(data) {
    // console.log(data);
    const ul = document.getElementById('user-list');
    for (const user of data) {
        // console.log(user.name);
        const li = document.createElement('li');
        li.innerText = user.name;
        ul.appendChild(li);
    }
}