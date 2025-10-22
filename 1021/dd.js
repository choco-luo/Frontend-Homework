// json串接回來
const url = "https://jsonplaceholder.typicode.com/users"

// call back function
fetch(url)
    .then((resp) => {
        return resp.json()
    })
    .then((users) => {
        users.forEach((user) => {
            console.log(user.email)
        })
    })