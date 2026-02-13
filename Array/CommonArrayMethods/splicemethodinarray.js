let fruits = ["apple", "banana", "orange", "mango", "kiwi"];
let removed = fruits.splice(2, 2);

let colors = ["red", "green", "blue"];
colors.splice(1, 0, "yellow", "purple");

let numbers = [1, 2, 3, 4, 5];
numbers.splice(1, 2, 6, 7, 8);

let arr = [1,2,3];
arr.splice(1,1);

let fruitsd = ["apple", "banana", "orange"];
let index = fruitsd.indexOf("orange");

if (index !== -1) {
    fruitsd.splice(index, 1);
}
