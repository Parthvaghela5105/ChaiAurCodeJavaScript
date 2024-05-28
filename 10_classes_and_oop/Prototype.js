let myName = "Parth      ";

console.log(myName.trim().length);

let myHeros = ["thor","Spiderman"]

let heroPower = {
    thor : "hammer",
    spiderman : "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
}

Array.prototype.heyHitesh = function(){
    console.log("Parth Say's Hello");
}

// heroPower.hitesh()
// myHeros.hitesh()
// myHeros.heyHitesh()
// heroPower.heyHitesh()

// inheritence

const User ={
    name : "Chai",
    email : "chai@google.com"
}

const Teacher ={
    makeVideo : true
}

const TeachingSupport = {
    isAvailable : false
}

const TASupport ={
    makeAssignment : 'JS Assignment',
    fullTime : true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

//modern Syntax
Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUsername = "ChaiAurCode          "
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"parth".trueLength()
"iceTea".trueLength()