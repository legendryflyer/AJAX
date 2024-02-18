// let pro = new Promise(function (resolve, reject) {
//     let firstname = "tavish"
//     if (firstname.startsWith('T')) {
//         resolve("hello")
//     }
//     else {
//         reject("bye")
//     }
// })

// pro.then(function (str) {
//     console.log(str)
// }, function (str) {
//     console.log(str)
// })


// pro.then(function (str) {
//     console.log(str)
// })
// .catch(function (str) {
//     console.log(str)
// })
// .finally(function () {
//    console.log(str)
// })

//program 

// let pro = new Promise(function (resolve, reject) {
//     let a = 20
//     let b = 20
//     if (a == b) {
//         resolve('Hey')
//     }
//     else {
//         reject('Bye')
//     }
// })
// pro.then(function (str) {
//     console.log(str)
//     return str + "All"
// })
// .then(function(str){
//     console.log(str) //ByeAll
//     return "Minskole"
// })
// .then(function(str){
//     console.log(str)//Minskole
// })
// .catch(function(str){
//     console.log(str)

// })


// async--->sync
// callback hell

// function getSingleUser() {
//     setTimeout(function () {
//         console.log("User Create")

//         setTimeout(function () {
//             console.log("Get ID")

//             setTimeout(function () {
//                 console.log("Show User")
//             }, 1000)
//         }, 2000)
//     }, 3000)
// }
// getSingleUser()


function createUser(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("user created")
        },2000)
    })
}
function getID(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve("get  id")
        },2000)
    })
}
function showUser(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("show user ")
        },1000)
    })
}

createUser()
.then(function(str){
    console.log(str)
    return getID()
})
.then(function(str){
    console.log(str)
    return showUser()
})
.then(function(str){
    console.log(str)
})
.catch(function(){
    console.log("err")
})
.finally(function(){
    console.log("always execute")
})






