function SetUsername(username){
    //complex DB Calls
    this.username = username
}

function createUser(username , email, password){
    SetUsername.call(this , username)  // 
    this.email = email
    this.password = password
}

const chai = new createUser("Parth" , "parth@google.com" , "1234")

console.log(chai);