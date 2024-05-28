const user ={
    username : "Parth",
    logincount : 8,
    signedIn : true,

    getUserDetails: function(){
        // console.log(`User Name: ${this.username}`);
        // console.log(this);
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());


function User(username , logincount , isLoggedIn)
{
    this.username = username;
    this.logincount = logincount;
    this.isLoggedIn = isLoggedIn;

    this.greetings = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this;
}

const userOne = new User("Parth" , 7 , true);
const userTwo = new User("Chai aur Code" , 2 , false)

console.log(userOne.constructor);
// console.log(userTwo);
// console.log(userOne.greetings());


