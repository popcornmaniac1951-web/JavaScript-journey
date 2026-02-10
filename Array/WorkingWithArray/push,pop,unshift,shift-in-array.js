// 1️⃣ push() → Add to the END
let fruitsList = ["apple", "banana"];

fruitsList.push("orange");

console.log(fruitsList);
// ["apple", "banana", "orange"]

// 2️⃣ pop() → Remove from the END
let cityNames = ["Delhi", "Mumbai", "Chennai"];

let removedCity = cityNames.pop();

console.log(removedCity); // "Chennai"
console.log(cityNames);   // ["Delhi", "Mumbai"]

// 3️⃣ unshift() → Add to the START
let evenNumbers = [2, 4, 6];

evenNumbers.unshift(0);

console.log(evenNumbers);
// [0, 2, 4, 6]

// 4️⃣ shift() → Remove from the START
let colorsQueue = ["red", "green", "blue"];

let firstColor = colorsQueue.shift();

console.log(firstColor);  // "red"
console.log(colorsQueue); // ["green", "blue"]