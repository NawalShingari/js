// for (let index = 0; index <= 10; index++) {
//     const element = index;
//     console.log(element);
    
// }
// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     console.log(element);
    
// // }
// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if (i == 5){
//         console.log("5 bhai hai")
//     }
//     console.log(element);
    
// }
// for (let i = 0; i <= 10; i++) {
//     console.log(`outer loop is ${i}`);
//     for (let j = 0; j <= 10; j++) {
//         console.log(i + " * " + j + "=" + i*j);
//     }
// }

// BREAK STATEMENT
// for (let i = 1; i <= 10; i++) {
//     if (i == 5){
//         console.log("5 bhai agya hai");
//         break;
//     }
//     console.log(` loop is ${i}`);
    
// }

// CONTINUE STATEMENT
// for (let i = 1; i <= 10; i++) {
//     if (i == 5){
//         console.log("5 bhai agya hai");
//         continue;
//     }
//     console.log(` loop is ${i}`);
    
// }

// // WHILE LOOP
// let i = 0;
// while (i <= 10) {
//     console.log(`while loop is ${i}`);
//     i = i + 2;
// }

// let myArray = ["a", "b", "c", "d"];

// let arr = 0;
// while (arr < myArray.length) {
//     console.log(myArray[arr]);
//     arr++;

// }

// // DO WHILE LOOP

// let a = 1;
// do {
//     console.log(`do while loop value is ${a}`)
//     a++;

// }while (a <= 10);

// for of 

// const arr = [1, 2, 3, 4, 5]

// for (const i of arr) {
//     console.log(i);
    
// }
// const ok = "hello ji kya haal hai"


// for (const i of ok) {
//     console.log(`each greet in ok is ${i}`);
    
// }

// const map = new Map()
// map.set('dl', 'delhi')
// map.set('hr', 'hriyana')
// map.set('pb', 'punjab')
// map.set('tn', 'tamil nadu')

// //console.log(map)

// for (const key of map) {
//     console.log(`each key in map is ${key}`);
    
// }
// for (const [key, value] of map) {
//     console.log(`each key in map is ${key} and value is ${value}`);
    
// }


// const myobject = {
//     dl: "delhi",
//     hr: "hriyana",
//     pb: "punjab",
//     tn: "tamil nadu"
// }

// for (const key in myobject) {
//     console.log(`${key} and value is ${myobject[key]}`);
// }

// const ok = ["delhi", "hriyana", "punjab", "tamil nadu"]
//     ok.forEach( function (item) {
//         console.log(item);
//     })

// const ok = [
//     {
//         name: "delhi",
//         value: "dl"
//     },
//     {
//         name: "hriyana",
//         value: "hr"
//     },
//     {
//         name: "punjab",
//         value: "pb"
//     }
// ]

// ok.forEach( function (item) {
//     console.log(item)
// } )


const ok = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const ko = ok.filter( (value) => value > 4 )
// console.log(ko)


// const ko = ok.filter( (value) => {
//     return value > 4
// } )

// console.log(ko)


const newok = []

ok.forEach( (value) => {
    if (value > 4) {
        newok.push(value)
    }
} )
console.log(newok)