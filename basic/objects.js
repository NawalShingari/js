// const mysym = Symbol("key1")

// const user = {
//     name:"nawal",
//     [mysym]: "key1",
//     age: 20,
//     location: "delhi",
//     email: "nawal@gamail.com"

// }
// console.log(user["email"])
// console.log(user.email);
// console.log(user[mysym]);

// user.email = "nawal@google.com"
// console.log(user["email"])

// Object.freeze(user)

// user.age = 21

// user.greeting = function(){
//     console.log("hello user");
// }
// console.log(user.greeting());

// user.greeting2 = function(){
//     console.log(`hello user, ${this.name}`);
// }
// console.log(user.greeting2());

// const user2 = {}

// user2.id = "abc"
// user2.name = "nawal"
// user2.isloggedin = false

// console.log(user2);
 
// const regularuser = {
//     email: "abc@gmail.com",
//     fullname: {
//         userfullname:{
//             firstname: "nawal",
//             lastname: "shingari"
//         }

//     }
// }

// const obj1 = {1: "a", 2: "b"}
// const obj2 = {3: "a", 4: "b"}
// const obj4 = {5: "a", 6: "b"}

// const obj3 = {...obj1, ...obj2}
// console.log(obj3)

const course = {
    coursename: "js in hindi",
    price: "999",
    courseinstructor: "hitesh"
}

const {courseinstructor} = course

// console.log(courseinstructor);
