// dates

let mydate = new Date()
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toISOString());
console.log(mydate.toJSON());
console.log(mydate.toLocaleDateString());


let createdate = new Date(2026, 11 , 21, 4,4)
console.log(createdate.toDateString());

let mytimestamp = Date.now()
console.log(mytimestamp);

console.log(createdate.getTime());
