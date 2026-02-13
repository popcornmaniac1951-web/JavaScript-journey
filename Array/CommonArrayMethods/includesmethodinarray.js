let fruits = ["apple", "banana", "orange"];

console.log(fruits.includes("banana")); // true
console.log(fruits.includes("grape"));  // false
console.log(fruits.includes("Banana")); // false

let numbers = [10, 20, 30, 40, 50, 30];

console.log(numbers.includes(30, 3));

let mixed = [1, "2", 3];

console.log(mixed.includes(2));   // false
console.log(mixed.includes("2")); // true
