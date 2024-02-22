function loadUsers() {
    const url = 'https://jsonplaceholder.typicode.com/users';
    fetch(url).then(response => response.json()).then(json => displayUsers(json));
}

function displayUsers(data) {
    console.log(data);
}