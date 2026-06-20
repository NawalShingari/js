let name = "nawal"
let age = 20

console.log(`hello my name is ${name} and my age is ${age}`);

const gameName = new String('navvvvv')

console.log(gameName);
 
console.log(gameName.__proto__);

console.log(gameName.length);

console.log(gameName.anchor());

console.log(gameName.at());

console.log(gameName.blink());


console.log(gameName.toUpperCase());

const aaa = gameName.substring(0, 1)

console.log(aaa);

let n = "nawal"

console.log(n.charAt(2)); // Kisi position ka character return karta hai.

console.log(n.at(-1));  // charAt jaisa, lekin negative indexing support karta hai.

// Searching methods

console.log(n.indexOf('a')); // first occurrence ka index

console.log(n.lastIndexOf('a')); // last occurrence ka index

console.log(n.includes('naw')); // check string that exist or not

console.log((n.startsWith("l"))); // check beginning of stirng

console.log(n.endsWith("l")); // check last value of string

console.log(n.search('la')); // regax search

// Extracting methods

console.log(n.slice(0, 4)); // extract part of string

console.log(n.substring(0, 5)); // not support negative index

// COMBINING STRINGS

console.log(n.concat(" shingari"));

// replacing methods

console.log(n.replace("nawal", "NAWAL")); // replace the first match

console.log(n.replaceAll("a","o")); // replace all the matches

let a = "nawal bro how , are you fine" 
console.log(a.split(",")); // stings ko array mai convert karta hai
console.log(n.split(""));

// removing sapce 
let b = "    nawal shingari    yo loooo.  "
console.log(b.trim()); //start and end ka space remove karta hai 

console.log(n.repeat(13)); // to repetition

 























