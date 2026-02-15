// ======================================
// 1. Basic Array & Accessing Elements
// ======================================

let friends = ['a','b','c','d'];
console.log(friends[2]);

let [first, second, third, fourth] = friends;
console.log(first);
console.log(second);
console.log(friends[1]);


// ======================================
// 2. Skipping Elements in Destructuring
// ======================================

let power = ['a','b','c','d'];
let [first1, second2, , third1] = power;

console.log(first1);
console.log(second2);
console.log(third1);


// ======================================
// 3. Default Values in Destructuring
// ======================================

console.log('Array Destructuring with default values');

let abcArr = ['1','2','3','4'];
let [a1, b1, c1, d1, e1 = '5'] = abcArr;

console.log(a1);
console.log(b1);
console.log(c1);
console.log(d1);
console.log(e1);


// ======================================
// 4. Rest Syntax
// ======================================

console.log('Rest Syntax');

let abdArr = ['apple','mango','banana','ginger','blackberry','pineapple','kiwi'];
let [firs, secon, ...rest] = abdArr;

console.log(firs);
console.log(secon);
console.log(rest);


// ======================================
// 5. String → Array (split)
// ======================================

console.log('String splitting into array');

let word = 'hello';
let splitArray = word.split("");
console.log(splitArray);


// ======================================
// 6. Array → String (join)
// ======================================

console.log("Joining the split array");

let joinedWord = splitArray.join("");
console.log(joinedWord);


// ======================================
// 7. Reverse Array
// ======================================

console.log('Reverse of an array');

let charArray = ['h','e','l','l','o'];
let reversedArray = charArray.reverse();

console.log(reversedArray);
console.log(reversedArray.join(""));


// ======================================
// 8. Accessing Non-Existing Index
// ======================================

let fruitsBasic = ['apple','orange','goa'];
console.log(fruitsBasic[2]);
console.log(fruitsBasic[5]); // undefined


// ======================================
// 9. Adding Elements by Index
// ======================================

let games = ['cod','gta','bgmi'];
games[3] = 'free fire';
games[4] = 'scare fall';

console.log(games);


// ======================================
// 10. Replacing Elements
// ======================================

let vowels = ['a','e','i','o','u'];
vowels[1] = 'b';
vowels[2] = 'c';

console.log(vowels);


// ======================================
// 11. Array Length
// ======================================

let gtaArr = ['hello','world','is','me'];
console.log(gtaArr.length);
console.log(gtaArr[0], 'adithyan');


// ======================================
// 12. One-Dimensional Array
// ======================================

let fruitsOneD = ['apple','orange','mango'];
console.log(fruitsOneD[0]);


// ======================================
// 13. Two-Dimensional Array
// ======================================

let vehicles = [
    ['1','2','3','4'],
    ['a','b','c','d'],
    ['apple','orange','codex','he-man']
];

console.log(vehicles[0][2]);
console.log(vehicles[1][1]);


// ======================================
// 14. push()
// ======================================

let fruitsList = ["apple", "banana"];
fruitsList.push("orange");
console.log(fruitsList);


// ======================================
// 15. pop()
// ======================================

let cityNames = ["Delhi", "Mumbai", "Chennai"];
let removedCity = cityNames.pop();

console.log(removedCity);
console.log(cityNames);


// ======================================
// 16. unshift()
// ======================================

let evenNumbers = [2, 4, 6];
evenNumbers.unshift(0);

console.log(evenNumbers);


// ======================================
// 17. shift()
// ======================================

let colorsQueue = ["red", "green", "blue"];
let firstColor = colorsQueue.shift();

console.log(firstColor);
console.log(colorsQueue);


// ======================================
// 18. indexOf()
// ======================================

let colorsArr = ["red", "green", "blue", "yellow", "green"];
let w = colorsArr.indexOf("green", 3);
console.log(w);

let fruitsCheck = ["apple", "banana", "orange"];
console.log(fruitsCheck.indexOf("grape"));

let numberArr = [10, 20, 30, 20, 40];
console.log(numberArr.indexOf(20));


// ======================================
// 19. Spread Operator (Shallow Copy)
// ======================================

let scores = [85, 90, 78];
let newScores = [...scores];
newScores.push(100);

console.log(scores);
console.log(newScores);


// ======================================
// 20. Spread with Nested Arrays
// ======================================

let teams = [["John", "Mike"], ["Sara", "Emma"]];
let updatedTeams = [...teams];

updatedTeams[0].push("Alex");

console.log(teams);
console.log(updatedTeams);


// ======================================
// 21. slice()
// ======================================

let products = ["Laptop", "Phone", "Tablet"];
let productsCopy = products.slice();

productsCopy.splice(1, 1);

console.log(products);
console.log(productsCopy);


// ======================================
// 22. concat()
// ======================================

let cities = ["Delhi", "Mumbai", "Kochi"];
let citiesClone = [].concat(cities);

citiesClone.push("Chennai");

console.log(cities);
console.log(citiesClone);


// ======================================
// 23. includes()
// ======================================

let fruitsInc = ["apple", "banana", "orange"];
console.log(fruitsInc.includes("banana"));
console.log(fruitsInc.includes("grape"));
console.log(fruitsInc.includes("Banana"));

let numbersInc = [10, 20, 30, 40, 50, 30];
console.log(numbersInc.includes(30, 3));

let mixedArr = [1, "2", 3];
console.log(mixedArr.includes(2));
console.log(mixedArr.includes("2"));


// ======================================
// 24. splice()
// ======================================

let fruitsSplice = ["apple", "banana", "orange", "mango", "kiwi"];
let removed = fruitsSplice.splice(2, 2);
console.log(fruitsSplice);
console.log(removed);

let colorsSplice = ["red", "green", "blue"];
colorsSplice.splice(1, 0, "yellow", "purple");
console.log(colorsSplice);

let numbersSplice = [1, 2, 3, 4, 5];
numbersSplice.splice(1, 2, 6, 7, 8);
console.log(numbersSplice);

let arrSimple = [1,2,3];
arrSimple.splice(1,1);
console.log(arrSimple);


// ======================================
// 25. Remove Specific Item Using indexOf + splice
// ======================================

let fruitsRemove = ["apple", "banana", "orange"];
let index = fruitsRemove.indexOf("orange");

if (index !== -1) {
    fruitsRemove.splice(index, 1);
}

console.log(fruitsRemove);


// ======================================
// 26. map()
// ======================================

let numbersMap = [1, 2, 3, 4];

let doubledNumbers = numbersMap.map(function(num) {
    return num * 2;
});

console.log(numbersMap);       // original
console.log(doubledNumbers);   // new array



// ======================================
// 27. filter()
// ======================================

let agesFilter = [12, 18, 22, 15, 30];

let adults = agesFilter.filter(function(age) {
    return age >= 18;
});

console.log(agesFilter);  // original
console.log(adults);      // filtered



// ======================================
// 28. reduce()
// ======================================

let pricesReduce = [100, 200, 300];

let totalPrice = pricesReduce.reduce(function(total, price) {
    return total + price;
}, 0);

console.log(totalPrice);



// ======================================
// 29. find()
// ======================================

let usersFind = [
    { id: 1, name: "Arun" },
    { id: 2, name: "Rahul" },
    { id: 3, name: "Vishnu" }
];

let foundUser = usersFind.find(function(user) {
    return user.id === 2;
});

console.log(foundUser);



// ======================================
// 30. some()
// ======================================

let marksSome = [45, 60, 72, 30];

let hasPassed = marksSome.some(function(mark) {
    return mark >= 50;
});

console.log(hasPassed);  // true if at least one passes



// ======================================
// 31. every()
// ======================================

let marksEvery = [80, 85, 90];

let allPassed = marksEvery.every(function(mark) {
    return mark >= 50;
});

console.log(allPassed);  // true only if all pass



// ======================================
// 32. Chaining Methods (Real World Example)
// ======================================

let productsChain = [
    { name: "Laptop", price: 50000 },
    { name: "Phone", price: 20000 },
    { name: "Tablet", price: 15000 },
    { name: "Monitor", price: 10000 }
];

let expensiveProductsTotal = productsChain
    .filter(function(product) {
        return product.price > 15000;
    })
    .map(function(product) {
        return product.price;
    })
    .reduce(function(total, price) {
        return total + price;
    }, 0);

console.log(expensiveProductsTotal);



// ======================================
// 33. forEach()
// ======================================

let citiesLoop = ["Delhi", "Mumbai", "Kochi"];

citiesLoop.forEach(function(city, index) {
    console.log(index + ": " + city);
});



// ======================================
// 34. findIndex()
// ======================================

let numbersIndex = [10, 20, 30, 40];

let foundIndex = numbersIndex.findIndex(function(num) {
    return num === 30;
});

console.log(foundIndex);



// ======================================
// 35. flat()
// ======================================

let nestedArray = [1, 2, [3, 4], [5, [6, 7]]];

let flattenedOnce = nestedArray.flat();
console.log(flattenedOnce);

let flattenedDeep = nestedArray.flat(2);
console.log(flattenedDeep);



// ======================================
// 36. flatMap()
// ======================================

let sentencesFlatMap = ["hello world", "javascript arrays"];

let words = sentencesFlatMap.flatMap(function(sentence) {
    return sentence.split(" ");
});

console.log(words);



// ======================================
// 37. sort()
// ======================================

let numbersSort = [5, 2, 9, 1];

numbersSort.sort(function(a, b) {
    return a - b;
});

console.log(numbersSort);



// ======================================
// 38. reverse()
// ======================================

let reverseExample = [1, 2, 3, 4];

reverseExample.reverse();
console.log(reverseExample);



// ======================================
// 39. at()
// ======================================

let atExample = ["a", "b", "c", "d"];

console.log(atExample.at(1));
console.log(atExample.at(-1));



// ======================================
// 40. keys(), values(), entries()
// ======================================

let iteratorExample = ["x", "y", "z"];

for (let key of iteratorExample.keys()) {
    console.log("Key:", key);
}

for (let value of iteratorExample.values()) {
    console.log("Value:", value);
}

for (let entry of iteratorExample.entries()) {
    console.log("Entry:", entry);
}
