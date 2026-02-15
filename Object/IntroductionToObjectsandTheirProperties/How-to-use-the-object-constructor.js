console.log("Create an empty object \nConvert primitive values (number, string, boolean) into object wrappers");
let obj = new Object();
console.log(obj);
console.log(typeof obj);

console.log('simple way to make a empty object');
let sbc = {};
console.log(typeof sbc);

console.log('Case 2: Converting Primitive → Object');

let objs = 23;
let newone = Object(objs); // number object
console.log(newone);
console.log(typeof newone);

Object("hello");  // String object
Object(true);     // Boolean object

console.log('❗ What if null or undefined?');

Object(null); // output is empty object
Object(undefined); // output is empty object
