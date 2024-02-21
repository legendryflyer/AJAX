// promises

// let pro = new Promise(function (resolve, reject) {
//     let a = 10
//     let b = 10

//     if (a == b) {
//         resolve("hello")
//     }
//     else {
//         reject("Bye")
//     }
// })

let pro = new Promise(function (resolve, reject) {
    let a = 10
    let b = 10

    if (a == b) {
        resolve("hello")
    }
    else {
        reject("Bye")
    }
})

pro
    .then(function (a) {
        console.log(a)
    })
    .catch(function (b) {
        console.log(b)
    })
    .finally(function(){
        console.log("I will always executed block")
    })
