// function getMultipleUser() {
//     fetch("https://reqres.in/api/users?page=2")
//         .then(function (responce) {
//             console.log(responce.json)
//             return responce.json()  //return data in json format
//         })
//         .then(function (response) {


//             response.data.forEach(function (el) {
//                 document.write(`<h1>${el.first_name}</h1>`)
//                 document.write(`<h1>${el.last_name}</h1>`)
//                 document.write(`<h1>${el.id}</h1>`)
//                 document.write(`<h1>${el.email}</h1>`)
//                 document.write(`<img src=${el.avatar}>`)
//             })
//         })
// }
// getMultipleUser()


// function getMultipleUser(page) {
//     return fetch(`https://reqres.in/api/users?page=${page}`)
//         .then(function (responce) {
//             return (responce.json())
//         })
//         .then(function (responce) {
//             return (responce.data)
//         })
// }
// getMultipleUser()


function getSingleUser(id) {
    return fetch(`https://reqres.in/api/users/${id}`)
        .then(function (res) {
            return res.json()
        })
        .then(function (res) {
            return (res.data)
        })
}
getSingleUser(2)
