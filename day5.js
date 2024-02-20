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
            console.log("user created")
        },3000)
    })
}
function getID(){
    return  new Promise(function(resolve,reject){
        setTimeout(function(){
            console.log("get id")
        },2000)
        
    })
}
function  verify(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            console.log("user verified")
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