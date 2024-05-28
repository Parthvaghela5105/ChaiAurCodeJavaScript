class User{
    constructor(username)
    {
        this.username = username
    }

    logMe(){
        console.log(`Username : ${this.username}`);
    }

    createId(){
        return `123`
    }
}


const parth = new User("parth");

console.log(parth.createId());

class Teacher extends User{
    constructor(username , email ){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone" , "i@phone.com");
console.log(iphone.createId());
iphone.logMe()
