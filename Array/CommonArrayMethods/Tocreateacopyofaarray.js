let scores = [85, 90, 78];
let newScores = [...scores];

newScores.push(100);

console.log(scores);     // [85, 90, 78]
console.log(newScores);  // [85, 90, 78, 100]

let teams = [["John", "Mike"], ["Sara", "Emma"]];
let updatedTeams = [...teams];

updatedTeams[0].push("Alex");

console.log(teams);
console.log(updatedTeams);

let products = ["Laptop", "Phone", "Tablet"];
let productsCopy = products.slice();

productsCopy.splice(1, 1);

console.log(products);      // ["Laptop", "Phone", "Tablet"]
console.log(productsCopy);  // ["Laptop", "Tablet"]

let cities = ["Delhi", "Mumbai", "Kochi"];
let citiesClone = [].concat(cities);

citiesClone.push("Chennai");

console.log(cities);      // ["Delhi", "Mumbai", "Kochi"]
console.log(citiesClone); // ["Delhi", "Mumbai", "Kochi", "Chennai"]

let users = [
  { name: "Arun" },
  { name: "Rahul" }
];

let usersCopy = [...users];

usersCopy[0].name = "Vishnu";

console.log(users);
console.log(usersCopy);

