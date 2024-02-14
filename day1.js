// AJAX ----> Asynchronous JavaScript  and XML
//---------------------------------------------------------
// Synchronous : The code waits for the request to complete before moving on.
//              It locks up the browser until it gets a response from server.
// runs line by line.


function click(){
    console.log("Button clicked")
}
function click1(){
    console.log("Button clicked again")
}
click1()
click()

// Sync==>Async

function add(){
    setTimeout(function(){
        console.log("add")
    },2000)
}
function substract(){
    setTimeout(function(){
        console.log("subtract")
    },3000)
}
substract()
add()

// add after 2sec
// subtract after 3sec

// api => multiple user info=> single user => show info   => dependent
// if there is dependancy we have to  use callbacks or promises to  make sure that one function finishes its execution before another starts.
// Async=>Sync again 

function getUser() {
    setTimeout(function () {
        console.log("Multiple user Created")
    }, 4000)

    setTimeout(function () {
        console.log('Get single user')
    }, 3000)

    setTimeout(function () {
        console.log("Render user info")
    }, 2000)
}
getUser()





