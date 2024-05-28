class User{
    constructor(username)
    {
        this.username = username;
    }

    logMe(){
        console.log(`Username is ${this.username}`)
    }
}

class Teacher extends User{
    constructor(username , email , password){
        super(username)
        this.email = email
        this.password = password
    }

    addedCourse(){
        console.log(`new course added by ${this.username}`);

    }
}

const chai = new Teacher("chai" , "chai@google.com","123")

chai.addedCourse();
chai.logMe();

const masalaChai = new User('masala chai');

masalaChai.logMe()

console.log(chai=== masalaChai);
console.log(chai === User);
console.log(chai === Teacher);
console.log(chai instanceof User);
console.log(chai instanceof Teacher);
