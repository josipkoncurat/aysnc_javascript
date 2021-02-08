// const promise = new Promise((resolve, reject) => {
//     setTimeout(() =>{
//         // resolve({user:'Josip'})
//         reject(new Error('error'))
//     }, 2000)
// });
//
// promise.then(user => {
//     console.log(user)
// }).catch(err => console.log(err.message))
//
console.log("Start")

function loginUser(email, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve ({userEmail:email})
        }, 1000)
    })
}

function getUserVideos(email) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(['video1', 'video2', 'video3'])
        }, 1000)
    })
}

function videoDetails(video) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(video)
        }, 1000)
    })
}

// const email = loginUser("jkoncura@gmail.com", "password", (email) => {
//     console.log(email)
//     getUserVideos(email.userEmail, (videos) => {
//         console.log(videos)
//         videoDetails(videos[0], (video) => {
//             console.log(video)
//         })
//     })
// }, () => console.log("on Failure called"))
let details;
    details = loginUser("jkoncura@gmail.com", "password")
        .then(userEmail => getUserVideos(userEmail))
        .then(videos => videoDetails(videos[0]))
        .then(detail => {
            console.log(detail)
            return detail
        })
console.log("Finish")
