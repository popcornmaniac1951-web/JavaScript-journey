console.log("num2 will show 5 because here it is a primitive data type.\n if we reassign the value of num1 will never affect the num2 value");
let num1 = 5;
let num2 = num1;

num1 = 8;
console.log(num2);

console.log('object is a non-primitiive data type , so when we change the value of the person object \n it will also affect copyperson object');

const person = {name : "athul",age : 20, place : 'angamaly'};

let copyperson = person;

person.age = 34;

console.log(copyperson.age);