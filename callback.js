// const posts = [
//     { title : 'Post One', body : 'This is post one'},
//     { title : 'Post Two', body : 'This is post two'}
// ];

// function getPosts(){
//     setTimeout(() => {
//         let output = '';
//         posts.forEach((post, index) => {
//             output += `<li>${post.title}</li>`;
//         });
//         document.body.innerHTML = output;
//     }, 1000);
// }

// function createPost(post, callback){
//     setTimeout(() => {
//         posts.push(post);
//         callback();
//     }, 2000);
// }

// createPost({ title : 'Post Three', body : 'This is post three'}, getPosts)

//Latihan2
function doThing(callback){
    let name = 'Rakha'

    callback(name)
}

function callNm(nm){
    console.log('Hello', nm)
}

doThing(callNm)