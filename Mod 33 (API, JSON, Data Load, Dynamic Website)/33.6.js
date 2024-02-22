function loadPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPost(data))
}

function displayPost(posts){
    const postContainer = document.getElementById('post-container');
    for(const post of posts){
        const container = document.createElement('div');
        container.classList.add('post');
        container.innerHTML = `
            <h4>User: ${post.userId}</h4>
            <h5>Post: ${post.title}</h5>
            <p>Post description: ${post.body}</p>
        `;
        postContainer.appendChild(container);
    }
}

loadPost();