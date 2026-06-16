const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts'

// [GET] get all posts
fetch(POSTS_URL)
  .then((response) => response.json())
  .then((json) => console.log(json));

//[POST] create a new post
fetch(POSTS_URL, {
    method: "POST",
    body: JSON.stringify({
        title: 'Develhope POST',
        body: 'This is a POST from Develhope School'
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})
.then((response) => response.json())
.then((json) => console.log(json));