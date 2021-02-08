//AJAX - asynchronous javascript

// console.log("Start")
//
// setTimeout(() => {console.log("timeout")}, 1000)
//
// const items = [1,2,3,4,5]
//
// items.forEach(((value) => console.log(value)))
//
// console.log("End")


console.log("Start")

function loginUser(email, password, callback, onFailure) {
    setTimeout(() => {
        callback ({userEmail:email})
    }, 1000)
    onFailure()
}

function getUserVideos(email, callback) {
    setTimeout(() => {
        callback(['video1', 'video2', 'video3'])
    }, 1000)
}

function videoDetails(video, callback) {
    setTimeout(() => {
        callback(video)
    }, 1000)
}

const email = loginUser("jkoncura@gmail.com", "password", (email) => {
    console.log(email)
    getUserVideos(email.userEmail, (videos) => {
        console.log(videos)
        videoDetails(videos[0], (video) => {
            console.log(video)
        })
    })
}, () => console.log("on Failure called"))

console.log("Finish")
