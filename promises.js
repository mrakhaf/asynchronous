//LATIHAN1
// let p = new Promise((resolve, reject) => {
//     let a = 1 + 2
//     if (a == 2){
//         resolve('Success')
//     } else {
//         reject('Failed')
//     }
// })

// p.then((message) => {
//     console.log('This is in then ' + message)
// }).catch((message) => {
//     console.log('This is in catch ' + message)
// })

//LATIHAN2
// const userLeft = false
// const userWatchingCatMeme = false

// function watchTutorialPromise(){
//     return new Promise((resolve, reject) => {
//         if (userLeft){
//             reject({
//                 name : 'User Left',
//                 message : ':('
//             })
//         } else if (userWatchingCatMeme){
//             reject({
//                 name : 'User Watching Cat Meme',
//                 message : 'WebDevSimplified < Cat'
//             })
//         } else {
//             resolve('Thumbs up and Subscribe')
//         }
//     })
// }

// watchTutorialPromise().then((message) => {
//     console.log('Success : ' + message)
// }).catch((error) => {
//     console.log(error.name + ' ' + error.message)
// })

//LATIHAN3
let record = false

const recordVideo1 = new Promise((resolve, reject) => {
    resolve('Record video1 success')
    reject('Record video1 Failed')
    
    
})

const recordVideo2 = new Promise((resolve, reject) => {
    resolve('Record video2 success')
    reject('Record video1 Failed')
    
    
    
})

Promise.all([
    recordVideo1,
    recordVideo2
]).then((message) =>{
    console.log(message)
}).catch((error) => {
    console.log(error.message)
})