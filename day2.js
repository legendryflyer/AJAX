//  callback hell and promises are used to  handle asynchronous operations in a more manageable way.
//  Callback Hell: It is the practice of writing nested callback functions, where each callback function is passed as an argument to the previous function, making it difficult to read and maintain code.
//  1) Callback Hell: This is where multiple nested callbacks are used to handle the
//     results of one async operation before moving on to another, which can lead to
//     complex code that is hard to read and maintain.
//
//    Example (Callback Hell):

// program 1

// function getUser() {
//     setTimeout(function () {
//         console.log("Multiple user Created")
//     }, 4000)

//     setTimeout(function () {
//         console.log('Get single user')
//     }, 3000)

//     setTimeout(function () {
//         console.log("Render user info")
//     }, 2000)
// }
// getUser()

// using callback hell
// render user info
// get single user
// ultiple users created

// Asyn to Sync

function getUserInfo(){
    setTimeout(function(){
        console.log("get multiple users ")

        setTimeout(function(){
             console.log("get single user")
            
            setTimeout(function(){
                 console.log("render user info")
            },1000)
                
         },2000)
    },3000)
}
getUserInfo()



// promises

let pro = new Promise(function(resolve,reject){
    let a=10,b=10
    if (a==b){
        resolve("a is equal to b")
    }
    else{
        reject("bye")
    }
})

// consume the promise
pro.then((function(str){
    console.log(str)
}),
(function(str){
    console.log(str)
}))
