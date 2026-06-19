//"use strict" // treat all th js code as newer version

//alert(2 + 2) we are using node.js not browser  

// Number
let age = 20;

// String
let name = "Nawal";

// Boolean
let isStudent = true;

// Undefined
let city;

// Null
let data = null;

// BigInt
let bigNumber = 123456789012345678901234567890n;

// Symbol
let uniqueId = Symbol("id");

// Object
let person = {
    name: "Nawal",
    age: 20
};

// Array (Object)
let fruits = ["Apple", "Mango", "Banana"];

// Function (Object)
function greet() {
    return "Hello World";
}

// Display values and types
console.log(age, "->", typeof age);
console.log(name, "->", typeof name);
console.log(isStudent, "->", typeof isStudent);
console.log(city, "->", typeof city);
console.log(data, "->", typeof data); // object (special JS behavior)
console.log(bigNumber, "->", typeof bigNumber);
console.log(uniqueId, "->", typeof uniqueId);
console.log(person, "->", typeof person);
console.log(fruits, "->", typeof fruits);
console.log(greet, "->", typeof greet);