let value = "21"
let negvalue = -value
//console.log(negvalue);

let str1 = "hello"
let str2 = " nawalll"
let str3 = str1 + str2

//console.log(str3);
/*
====================================================
JAVASCRIPT OPERATORS & TYPE CONVERSION NOTES
====================================================

1. ARITHMETIC OPERATORS
----------------------------------------------------
+  Addition
-  Subtraction
*  Multiplication
/  Division
%  Modulus (Remainder)
** Exponent (Power)

Examples:
10 + 5  = 15
10 - 5  = 5
10 * 5  = 50
10 / 5  = 2
10 % 3  = 1
2 ** 3  = 8


2. IMPLICIT TYPE CONVERSION (AUTOMATIC)
----------------------------------------------------
JavaScript automatically converts data types
when performing operations.

No need to use Number(), String(), etc.

Examples:

"5" + 2
=> "5" + "2"
=> "52"

"5" - 2
=> 5 - 2
=> 3

"5" * 2
=> 5 * 2
=> 10

"10" / 2
=> 10 / 2
=> 5


3. RULE OF '+' OPERATOR
----------------------------------------------------
If one operand is a string,
JavaScript converts the other operand
to string and concatenates.

Examples:

2 + "3"
=> "2" + "3"
=> "23"

"2" + 3
=> "2" + "3"
=> "23"

"Hello" + 5
=> "Hello5"

true + "abc"
=> "trueabc"


4. RULE OF -, *, / OPERATORS
----------------------------------------------------
These operators try to convert strings
into numbers.

Examples:

"5" - 2
=> 3

"5" * 2
=> 10

"10" / 2
=> 5

"abc" - 2
=> NaN


5. LEFT TO RIGHT EVALUATION
----------------------------------------------------
JavaScript evaluates expressions
from left to right.

Example:

2 + 3 + "4"

Step 1:
2 + 3 = 5

Step 2:
5 + "4" = "54"

Output:
54


Example:

"2" + 3 + 4

Step 1:
"2" + 3 = "23"

Step 2:
"23" + 4 = "234"

Output:
234


6. BOOLEAN CONVERSION
----------------------------------------------------
true  => 1
false => 0

Examples:

true + 1
=> 1 + 1
=> 2

false + 5
=> 0 + 5
=> 5


7. NULL CONVERSION
----------------------------------------------------
null behaves like 0 in numeric operations.

Example:

null + 1
=> 0 + 1
=> 1


8. UNDEFINED CONVERSION
----------------------------------------------------
undefined cannot become a valid number.

Example:

undefined + 1
=> NaN


9. NaN (NOT A NUMBER)
----------------------------------------------------
Occurs when JavaScript fails
to convert a value into a number.

Examples:

Number("abc")
=> NaN

"abc" - 2
=> NaN


10. QUICK REVISION RULES
----------------------------------------------------

+ with String
=> String Concatenation

-, *, /
=> Numeric Conversion

true  => 1
false => 0

null => 0

undefined => NaN

====================================================
CODE EXAMPLES
====================================================
*/

console.log(10 + 5);      // 15
console.log(10 - 5);      // 5
console.log(10 * 5);      // 50
console.log(10 / 5);      // 2
console.log(10 % 3);      // 1
console.log(2 ** 3);      // 8

// String + Number
console.log("5" + 2);     // 52
console.log(2 + "3");     // 23

// String - Number
console.log("5" - 2);     // 3

// String * Number
console.log("5" * 2);     // 10

// String / Number
console.log("10" / 2);    // 5

// Left to Right
console.log(2 + 3 + "4"); // 54
console.log("2" + 3 + 4); // 234

// Boolean Conversion
console.log(true + 1);    // 2
console.log(false + 5);   // 5

// Null Conversion
console.log(null + 1);    // 1

// Undefined Conversion
console.log(undefined + 1); // NaN

// NaN Examples
console.log(Number("abc")); // NaN
console.log("abc" - 2);     // NaN