/*
====================================================
JAVASCRIPT COMPARISON OPERATORS
====================================================

Comparison operators compare two values.

Result is always:
true or false

----------------------------------------------------
1. >  (Greater Than)
----------------------------------------------------

5 > 3
=> true

3 > 5
=> false

----------------------------------------------------
2. <  (Less Than)
----------------------------------------------------

3 < 5
=> true

5 < 3
=> false

----------------------------------------------------
3. >= (Greater Than or Equal To)
----------------------------------------------------

5 >= 5
=> true

10 >= 5
=> true

3 >= 5
=> false

----------------------------------------------------
4. <= (Less Than or Equal To)
----------------------------------------------------

5 <= 5
=> true

3 <= 5
=> true

10 <= 5
=> false

----------------------------------------------------
5. == (Loose Equality)
----------------------------------------------------

Checks VALUE only.

JavaScript automatically converts types.

Examples:

5 == "5"
=> true

true == 1
=> true

false == 0
=> true

null == undefined
=> true

WARNING:
Avoid using == in interviews/projects.

----------------------------------------------------
6. === (Strict Equality)
----------------------------------------------------

Checks VALUE + DATATYPE

Examples:

5 === "5"
=> false

5 === 5
=> true

true === 1
=> false

This is the preferred operator.

----------------------------------------------------
7. != (Loose Not Equal)
----------------------------------------------------

Checks VALUE only.

5 != "5"
=> false

5 != 6
=> true

----------------------------------------------------
8. !== (Strict Not Equal)
----------------------------------------------------

Checks VALUE + DATATYPE

5 !== "5"
=> true

5 !== 5
=> false

----------------------------------------------------
IMPORTANT INTERVIEW QUESTIONS
----------------------------------------------------

1.

"2" > 1

=> 2 > 1
=> true

Reason:
String converted to number.

----------------------------------

2.

"02" > 1

=> 2 > 1
=> true

----------------------------------

3.

null > 0

=> false

null == 0

=> false

null >= 0

=> true

Why?

For >= comparison,
null becomes 0

0 >= 0
=> true

----------------------------------

4.

undefined > 0
=> false

undefined < 0
=> false

undefined == 0
=> false

undefined cannot convert properly.

----------------------------------

5.

"5" == 5

=> true

Type conversion happens.

----------------------------------

6.

"5" === 5

=> false

Different data types.

----------------------------------------------------
GOLDEN RULE
----------------------------------------------------

==  -> Checks value only
=== -> Checks value + datatype

Always prefer ===

====================================================
CODE EXAMPLES
====================================================
*/

console.log(5 > 3);          // true
console.log(5 < 3);          // false

console.log(5 >= 5);         // true
console.log(5 <= 5);         // true

console.log(5 == "5");       // true
console.log(5 === "5");      // false

console.log(5 != "5");       // false
console.log(5 !== "5");      // true

console.log("2" > 1);        // true
console.log("02" > 1);       // true

console.log(null > 0);       // false
console.log(null == 0);      // false
console.log(null >= 0);      // true

console.log(undefined > 0);  // false
console.log(undefined < 0);  // false
console.log(undefined == 0); // false 