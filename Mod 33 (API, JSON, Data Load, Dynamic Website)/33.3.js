/*
fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => console.log(response)) // similar to JSON.parse
    //   .then(json => console.log(json))

const url = 'https://jsonplaceholder.typicode.com/todos/1';
fetch(url).then(response => response.json()).then(json => console.log(json))
*/

function loadData() {
    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    fetch(url).then(response => response.json()).then(json => console.log(json))
}






function deletePost(){
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'DELETE',
    });
}



function patchPost(){
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PATCH',
  body: JSON.stringify({
    title: 'foo',
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
}



function createPost(){
    fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
}