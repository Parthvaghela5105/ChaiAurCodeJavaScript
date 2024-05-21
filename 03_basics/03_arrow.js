const user ={
    username: "Parth",
    price : 999,
    welcomeMessage : function(){
        console.log(`${this.username} Welcome to Website`);
        // console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "Sam";
// user.welcomeMessage()

console.log(this);

// function chai(){
//     let username = "parth"
//     console.log(this.username);
// }


const chai = () => {
    let username = "parth"
    console.log(username);
}
chai()


// const addTwo = (num1 , num2) =>{
//     return num1 + num2
// }  explicit return

// const addTwo = (num1 , num2) =>  num1 + num2
// const addTwo = (num1 , num2) =>  (num1 + num2) //implicit return
const addTwo = (num1 , num2) =>  ({username:"Parth"})  // syntax for object



console.log(addTwo(3 ,4))