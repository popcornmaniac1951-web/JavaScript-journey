//1.1 length of a string

const abc = 'hello';
console.log(abc.length);

//1.2.bracket notation

console.log(abc[0]);//it will print h .first character of the string
console.log(abc[abc.length - 1]);// it will print the last character in the string

//1.3 new line 
let poem = "Roses are red,\nViolets are blue,\nJavaScript is fun,\nAnd so are you.";
console.log(poem);

//1.4 escape string
let poem1 = "I like \"JavaScript\".";
console.log(poem1);

//1.5 template literal
const names = "Alice";
const greeting = `Hello, ${names}!`;

console.log(greeting);

//1.6 find position
const sentence = "The quick brown fox jumps over the lazy dog.";
const position = sentence.indexOf("fox");
console.log(position);
let sentences = "JavaScript is awesome, and JavaScript is powerful!";
let positions = sentences.indexOf("JavaScript", 10);
console.log(positions); // 27

//1.7 prompt method
const name = prompt("What is your name?");
console.log(`Hello, ${name}!`);

//1.8 charcodeat
let letter = "A";
console.log(letter.charCodeAt(0));  // 65
let char = String.fromCharCode(65);
console.log(char);  //  A

//1.9 check string contain substring
let phrase = "JavaScript is awesome!";
let result = phrase.includes("awesome");

console.log(result);  // true
let text = "Hello, JavaScript world!";
let resultd = text.includes("JavaScript", 7);

console.log(resultd);  // true

//1.10 slice
let message = "Hello, world!";
let greetings = message.slice(0, 5);

console.log(greetings);  // Hello

let messag = "Hello, world!";
let world = messag.slice(7);

console.log(world);  // world!

let mesage = "JavaScript is fun!";
let lastWord = mesage.slice(-4);

console.log(lastWord);  // fun!

//1.11 uppercase and lowercase
let greetin = "Hello, World!";
let uppercaseGreeting = greetin.toUpperCase();
console.log(uppercaseGreeting);  // "HELLO, WORLD!"

let shout = "I AM LEARNING JAVASCRIPT!";
let lowercaseShout = shout.toLowerCase();
console.log(lowercaseShout);  // "i am learning javascript!"

//1.12 trime string
let sentence1 = "   Hello, World!   ";
let trimmedSentence = sentence1.trim();
console.log(trimmedSentence);  // "Hello, World!"
//trime start
let sentence2 = "   Hello, World!   ";
let trimmedSentence2 = sentence2.trimStart();
console.log(trimmedSentence2);  // "Hello, World!   "
//trime end
let sentence3 = "   Hello, World!   ";
let trimmedSentence3 = sentence3.trimEnd();
console.log(trimmedSentence3);  // "   Hello, World!"

//1.13 replace string
let sentence4 = "Hello, World!";
let newSentence = sentence4.replace("World", "JavaScript");
console.log(newSentence);  // "Hello, JavaScript!"

//1.14 split string
let sentence5 = "Hello, World!";
let words = sentence5.split(",");
console.log(words);  // ["Hello", " World!"]
let wor = words[0];
let wod = words[1];
console.log(wor);
console.log(wod);

//1.15 repeat string
let sentence6 = "Hello, ";
let repeatedSentence = sentence6.repeat(3);
console.log(repeatedSentence);  // "Hello, Hello, Hello, "

//1.16 concat string
let sentence7 = "Hello, ";
let sentence8 = "World!";
let concatenatedSentence = sentence7.concat(sentence8);
console.log(concatenatedSentence);  // "Hello, World!"

//1.17 substring
let sentence9 = "Hello, World!";
let substring = sentence9.substring(7, 12);
console.log(substring);  // "World"

//1.18 typeof a variable
const wholeNumber = 50;
const decimalNumber = 4.5;
const negativeNumber = -7;

console.log(typeof wholeNumber); // number
console.log(typeof decimalNumber); // number
console.log(typeof negativeNumber); // number


