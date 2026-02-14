console.log("How To Check If a Object Has a property");

const person = {
    name : "athul",
    age : 34,
    place : "angamaly",
    qualification : "BCA"
}

console.log(person.hasOwnProperty("name"));
console.log("name" in person);
console.log(person.location !== undefined);

console.log("1. hasOwnproperty");

console.log(person.hasOwnProperty("name")); // true
console.log(person.hasOwnProperty("job"));  // false

console.log("2. using the in Operator");

console.log("name" in person); // true

console.log('3. checking against the undefined operator');

console.log(person.job !== undefined);

