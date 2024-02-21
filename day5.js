// async --- >sync
// callback hell

// function getuser(){
//     setTimeout(function(){
//         console.log('用户信息获取成功')
//         setTimeout(function(){
//             console.log("get ID")
//             setTimeout(function(){
//                 console.log('验证通过，欢迎')
//             },1000)
//         },2000)
//     },3000)
// }
// getuser()


// promise

function createUser(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("user created")
        },3000)
    })
}
function getID(){
    return  new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("get id")
        },2000)
        
    })
}
function  verify(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("user verified")
        },1000)
    })
}
createUser().then(function(a){
    console.log(a)
    return getID()
})
.then(function(a){
    console.log(a)
    return verify()
})
.then(function(a){
    console.log(a)
})



// async await 

// async function main(){
//     let p1 = await createUser()
//     console.log(p1)
//     let p2 = await getID()
//     console.log(p2)
//     let p3 =  await verify()
//     console.log(p3)
// }
// main()






