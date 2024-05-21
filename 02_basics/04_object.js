// const tinderUser = new Object()
const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Parth"
tinderUser.isLoggedIn = false


// console.log(tinderUser);

const regularUser ={
    email:"some@gmail.com",
    fullname:{  
        userfullname:{
            fisrtname : "Parth",
            lastname : "Vaghela"
        }
    }
}

// console.log(regularUser.fullname.userfullname.fisrtname);

const obj1 ={1 : 'a' , 2 :'b'}
const obj2 = {3: 'c' , 4 :'d'}

// const obj3 = Object.assign( obj1 , obj2) // target is obj1 
// const obj3 = Object.assign({} , obj1 , obj2) // target is {}

const obj3 = {...obj1 , ...obj2}
// console.log(obj3);

const users = [
        { 
            id : 1 ,
            email : "h@gmail.com"
        },
        { 
            id : 1 ,
            email : "h@gmail.com"
        },
        { 
            id : 1 ,
            email : "h@gmail.com"
        },
        { 
            id : 1 ,
            email : "h@gmail.com"
        }
]

// console.log(users[1].email);
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLogged'));

const course ={
    courseName :"JS in Hindi",
    price : 999,
    courseInstructor: "Parth"
}

const {courseInstructor : Instructor} = course
// console.log(courseInstructor);
console.log(Instructor);

// {
//     "name": "Parth",
//     "courseName" : "JS in hindi",
//     "price" : free
// }
