let info = {
    "page": 2,
    "per_page": 6,
    "total": 12,
    "total_pages": 2,
    "data": [
        {
            "id": 7,
            "email": "michael.lawson@reqres.in",
            "first_name": "Michael",
            "last_name": "Lawson",
            "avatar": "https://reqres.in/img/faces/7-image.jpg"
        },
        {
            "id": 8,
            "email": "lindsay.ferguson@reqres.in",
            "first_name": "Lindsay",
            "last_name": "Ferguson",
            "avatar": "https://reqres.in/img/faces/8-image.jpg"
        },
        {
            "id": 9,
            "email": "tobias.funke@reqres.in",
            "first_name": "Tobias",
            "last_name": "Funke",
            "avatar": "https://reqres.in/img/faces/9-image.jpg"
        },
        {
            "id": 10,
            "email": "byron.fields@reqres.in",
            "first_name": "Byron",
            "last_name": "Fields",
            "avatar": "https://reqres.in/img/faces/10-image.jpg"
        },
        {
            "id": 11,
            "email": "george.edwards@reqres.in",
            "first_name": "George",
            "last_name": "Edwards",
            "avatar": "https://reqres.in/img/faces/11-image.jpg"
        },
        {
            "id": 12,
            "email": "rachel.howell@reqres.in",
            "first_name": "Rachel",
            "last_name": "Howell",
            "avatar": "https://reqres.in/img/faces/12-image.jpg"
        }
    ],
    "support": {
        "url": "https://reqres.in/#support-heading",
        "text": "To keep ReqRes free, contributions towards server costs are appreciated!"
    }
}

console.log(info.data[0].first_name)


//  retriving data  from the json file using dot notation

// info.data.forEach((item)=>{
//     return  console.log(`${item.first_name}`)
// })


// info.data.forEach((item)=>{
//     console.log(`ID: ${item.id}\nEmail: ${item.email}\nFirst Name: ${item.first_name}\nlast_name: ${item.last_name}\nAvatar: ${item.avatar}`)
// })

info.data.forEach((item)=>{
    document.write(`<h3> ${item.id} </h3>`)
    document.write(`<p> ${item.first_name} </p>`)
    document.write(`<p>${item.last_name}</p>`)
    document.write(`<p>${item.email}</p>`)
    document.write(`<img src= "${item.avatar}" width="50"/>`)
})



