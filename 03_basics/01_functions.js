// function sayMyName(){
//     console.log("p");
//     console.log("a");
//     console.log("r");
//     console.log("t");
//     console.log("H");
// }

// sayMyName();

// function addTwoNumbers(number1 , number2){
//     console.log(number1 + number2)
// }

function addTwoNumbers(number1 , number2){
    // let result = number1 + number2
    // return result; 
    return number1 + number2
}

// const result = addTwoNumbers(3,5)
// console.log("Result: " ,result);

function loginUserMessage(username = 'sam') // if you not pass any value thank default value is sam
{
    if(!username)
    {
        console.log("Please enter a username");
        return
    }
    return `${username} just Logged In`
}

console.log(loginUserMessage());