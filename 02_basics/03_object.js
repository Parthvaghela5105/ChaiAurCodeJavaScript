//singleton
// Object.create


//object literals
const mySym = Symbol("key1")

const JsUser ={
    name:"Parth",
    "full name" : "Parth Vaghela",
    [mySym] : "myKey1",
    age : 19,
    locayion : "Jaipur",
    email : "Parth@google.com",
    isLoggedIn: false,
    lastLogginDay: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "parth@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "parth@microsoft.com"

// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JsUsers");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JsUsers, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


