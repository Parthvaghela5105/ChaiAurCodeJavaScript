/*
    primitive DataTypes
    
    7 Types:String , Number , Boolean , null , undefiened , symbol , BigInt
*/



/* 
    Reference(Non primitive)
    Array , Objects , Functions 
*/

const heros = ["Shaktiman" , "naagraj" , "doga"]
let myObj = {
    name : "Parth",
    age : 19,
}

const myFunction = function() {
    console.log("My name is Parth");
}



//****************************************************************** */


//Stack(Primitive) , Heap(Non-primitive)

let myYoutubeName = "Code with Parth"

let anotherName = myYoutubeName
anotherName ="Chai aur Code"

console.log(anotherName)
console.log(myYoutubeName);

let userOne = {
    email : "user@google.com",
    upi : "user@ybl"
}

let userTwo = userOne
userTwo.email="parth@gmail.com"

console.log(userOne.email)
console.log(userTwo.email);