===============================
JavaScript Basics – Simple Guide
===============================


1. VARIABLES
-------------------------------
A variable is a container that stores data.
We use variables to save values so we can use them later.

Example:

let name = "Adithyan";
let age = 20;

Here:
name stores text.
age stores a number.


2. STRING
-------------------------------
A string is text.
Strings are written inside quotes (" " or ' ').

Example:

let message = "Hello World";
console.log(message);

Output:
Hello World

Strings are used for names, messages, emails, etc.


3. NUMBER
-------------------------------
Numbers are used for math and counting.
They do NOT need quotes.

Example:

let price = 100;
let total = price + 50;

console.log(total);

Output:
150


4. BOOLEAN
-------------------------------
A boolean has only two values:
true or false.

It is used for decisions.

Example:

let isLoggedIn = true;

if (isLoggedIn) {
  console.log("Welcome!");
}

Booleans help control program flow.


5. FUNCTIONS
-------------------------------
A function is a block of code that performs a task.
We create it once and use it many times.

Example:

function greet(name) {
  return "Hello " + name;
}

console.log(greet("Adithyan"));

Output:
Hello Adithyan

Functions make code reusable.


6. ARRAYS
-------------------------------
An array stores multiple values in one variable.
Values are stored in order.

Example:

let fruits = ["Apple", "Banana", "Mango"];

console.log(fruits[0]);   // Apple
console.log(fruits.length); // 3

Arrays are useful when storing lists.


7. OBJECT
-------------------------------
An object stores data using key-value pairs.

Example:

let person = {
  name: "Adithyan",
  age: 20,
  city: "Angamaly"
};

console.log(person.name);      // Adithyan
console.log(person["age"]);    // 20

Objects are used to represent real-world things.


===============================
Summary
===============================

Variable → stores data
String → text
Number → numeric value
Boolean → true or false
Function → reusable block of code
Array → list of values
Object → key-value data structure

Master these fundamentals and you build a strong foundation in JavaScript.
