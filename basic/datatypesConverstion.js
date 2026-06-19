let score = 333
let score2 = "333aaaa"



console.log(typeof score);
console.log(typeof(score));

console.log(typeof score2);
console.log(typeof(score2));

let valueinnumber = Number(score2)
let valueinsting = String(score)

console.log(typeof valueinnumber);
console.log(typeof valueinsting);

console.log(valueinnumber);

let loggedin = 1
let Booleanlogeedin = Boolean(loggedin)
console.log(typeof Booleanlogeedin);
console.log(Booleanlogeedin);


/*
========================================
JAVASCRIPT TYPE CONVERSION
========================================

Type Conversion = Converting one data type into another.

Types:
1. Implicit Conversion (Automatic)
2. Explicit Conversion (Manual)

----------------------------------------
STRING TO NUMBER
----------------------------------------
Number("123") => 123
Number("abc") => NaN

----------------------------------------
STRING TO INTEGER
----------------------------------------
parseInt("123abc") => 123

----------------------------------------
STRING TO FLOAT
----------------------------------------
parseFloat("12.34abc") => 12.34

----------------------------------------
NUMBER TO STRING
----------------------------------------
String(123) => "123"

----------------------------------------
BOOLEAN CONVERSION
----------------------------------------
Boolean(1) => true
Boolean(0) => false
Boolean("") => false
Boolean("Hello") => true

----------------------------------------
IMPORTANT
----------------------------------------
Number(true) => 1
Number(false) => 0

String(true) => "true"
String(false) => "false"

----------------------------------------
FALSY VALUES
----------------------------------------
false
0
""
null
undefined
NaN

----------------------------------------
TRUTHY VALUES
----------------------------------------
1
-1
"hello"
[]
{}

========================================
CODE EXAMPLES
========================================
*/

// String -> Number
let strNum = "123";
console.log(Number(strNum)); // 123

// String -> Integer
console.log(parseInt("123abc")); // 123

// String -> Float
console.log(parseFloat("12.34abc")); // 12.34

// Number -> String
let num = 456;
console.log(String(num)); // "456"

// Boolean Conversion
console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean("Hello")); // true

// Number from Boolean
console.log(Number(true)); // 1
console.log(Number(false)); // 0

// Implicit Conversion
console.log("5" + 2); // "52"
console.log("5" - 2); // 3
console.log("5" * 2); // 10
console.log("5" / 2); // 2.5

// NaN Example
console.log(Number("abc")); // NaN

// Type Checking
console.log(typeof Number("123")); // number
console.log(typeof String(123));   // string
console.log(typeof true);          // boolean