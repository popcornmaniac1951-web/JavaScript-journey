// const exampleObject = {
//   propertyName: value,
// }

const person = {
    name : "Adithyan",
    age : 20,
    qualification : "BCA"
}

console.log(person.name);   //using the dot
console.log(person['name']);//using the bracket notation
console.log(person["age"]); //  30


const oddObject = {
  "1stProperty": "Hello",
  "property with spaces": "World"
};

console.log(oddObject["1stProperty"]);  // Hello
console.log(oddObject["property with spaces"]);  // World

const person3 = {
  name: "Alice",
  age: 30,
  city: "Wonderland"
};

let propertyName = "city";
console.log(person3[propertyName]); // Wonderland