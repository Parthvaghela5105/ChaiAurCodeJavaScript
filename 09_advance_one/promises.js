// const promiseOne = new Promise(function(resolve , reject){
//     // Do an async task
//     // DB calls,cryptography
//     setTimeout(function(){
//         console.log('Async time is comleted');
//         resolve();
//     }, 1000);
// })

// promiseOne.then(function(){
//     console.log("Promise consumed");
// })

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Async Task two");
//         resolve();
//     },1000)
// })
// .then(function(){
//     console.log("Async 2 resolved");
// })

// const promiseThree = new Promise(function(resolve,reject){
//     setTimeout(function () {
//         resolve({userName: "Parth",Email:"Parth123@gmail.com"})
//     }, 1000);
// })

// promiseThree.then(function(user){
//     console.log(user);
// })

// const promiseFour = new Promise(function(resolve , reject){
//     setTimeout(function() {
//         let error = true;
//         if(!error){
//             resolve({userName:"Parth" , password:"123"})
//         }
//         else{
//             reject()
//         }
//     },1000)
// }

// const promiseFour = new Promise(function(resolve , reject)
// {
//     setTimeout(function() {
//         let error = false
//         if(!error){
//             resolve({userName:"Parth" , password:"123"});
//         }
//         else{
//             reject('ERROR: something went wrong');
//         }
//     }, 1000);   
// })

// const username = promiseFour
// .then((user)=>{
//     console.log(user);
//     return user.userName;
// })
// .then((username)=>{
//     console.log(username);
// })
// .catch(function(error){
//     console.log(error);
// })
// .finally(function(){
//     console.log("The promise is either resolve or rejcted");
// })

const promiseFive = new Promise(function(resolve , reject){
    setTimeout(function() {
        let error = false
        if(!error){
            resolve({userName:"Parth" , password:"123"});
        }
        else{
            reject('ERROR: something went wrong');
        }
    }, 1000);
});

async function consumePromiseFive(){
    try{
        const responce = await promiseFive;
        console.log(responce);
    }
    catch(error){
        console.log(error);
    }
}

consumePromiseFive()