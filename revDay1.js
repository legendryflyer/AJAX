// function strA(){
//     console.log("A is exicuted")
// }

// function strB(){
//     console.log("B is exicuted")

// }

// function strC(){
//     console.log("C is exicuted")
// }

// strC()
// strB()
// strA()


// function getInfo(){
//     setTimeout(function(){
//         console.log("user created")
//     },3000)

//     setTimeout(function(){
//         console.log("get id")
//     },2000)
//     setTimeout(function(){
//         console.log("get info")
//     },1000)
// }

// getInfo()
// flow should be user created ----> get id ---->  get info

// call back hell
// function getInfo(){
//     setTimeout(function(){
//         console.log("user created")
//         setTimeout(function(){
//             console.log("get id")
//             setTimeout(function(){
//                 console.log("get info")
//             },1000)
//         },2000)
//     },3000)
// }

// getInfo()

// async code ---- sync ----- promises
// pending    --- resolve(function)   ------ reject(function)

// promises

let pro = new Promise(function(resolve,reject){
    let a=1
    let b=2
    if(a===1){
        resolve ('true')
    }
    else{
        reject('false')
    }
})

pro.then(function(srt){
    console.log(`this is ${srt}`)
},function(srt){
 console.log(`error ${srt}`)
})



function getInfo(){
    setTimeout(function(){
        console.log("user created")
        setTimeout(function(){
            console.log("get id")
            setTimeout(function(){
                console.log("get info")
            },1000)
        },2000)
    },3000)
}

// getInfo()

function userCreated(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("user created")
        },3000)
    })
}

function getID(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("get id")
        },2000)
    })
}

function getInfo(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("get get info")
        },1000)
    })
}


// userCreated().then(function(str){
//     console.log(str) // "user created"
//     return getID()
// })
// .then(function(idStr){
//     console.log(idStr) // "get id"
//     return getInfo()
// }).then(function(infoStr){
//     console.log(infoStr)   // "get get info"
// }, function(err){
//     console.error(err)  // Error: something bad happened
// })


async function getUserInfo(){
    let a = await userCreated()
    console.log(a)
    let b = await getID()
    console.log(b)
    let  c = await getInfo()
    console.log(c)
}
getUserInfo()