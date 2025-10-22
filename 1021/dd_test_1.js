const url = "https://fakestoreapi.com/products"

fetch(url)
    .then((resp) => {
        return resp.json()
    })
    .then((store) => {
        store.forEach((title) => {
            console.log(title.price)
        })
    })
    .catch((err) => {
        console.log(err)
    })