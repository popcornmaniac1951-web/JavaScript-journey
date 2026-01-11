//--------------first-step-in-javascript--------------`

// alert message

// alert("Hello World");

// name2 = "Mubashir";
// console.log(name2);

// console.log("Hello world");
// console.log(10 + 10);

//--------------javascript-basics--------------`

// variable declaration,intilization
// we can change the values of variables declared in let

// let username;

// username = "adithyan";

// console.log(username)

// username = "adhyan";

// console.log(username)

// but variables declared in const cannot be changed

// const name3 = "mubashir";

// console.log(name3);


//---------------------variable declaration example

// let q;
// let color;
// let _private;
// let $button;
// let getTop10;
// let a_large_name;
// let camelCase;

//--------------javascript-datatypes--------------`

// two types of datatypes they are
// primitive-str,num,boolean,undefined,null
// non-primitive-array,object


//------primitive

// str

// let name = '123abc#$%'

// num

// integer
// let age = 23;

// flating point

// let roll = 23.09;

// boolean

// let ishome = true;

// let ishome = false;

// let myage = 23;

// if(myage > 18)
// {
//     console.log("you can vote for election")
// }

// console.log(myage > 20);

//--------------operartors-in-javascript--------------`

// let a = 10;
// let b = 20;

// console.log(10 + 20);

// operator types

// no.1 unary operator

// x++;
// y++;;

// no.2 binary operators

// 5 + 2;
// 6 + 3;

// no.3 ternary operator
// (true)?3:2;

// ===============operator categories are mainly divided into four

// they are
// arithematic operators

// let a = 10;
// let b = 5;
// console.log(a + b);

// console.log(a % b)=0 because 10/5 is 2 it has no remainder

// assignment operators


// let age = 20;

// age = age + 1;

// age += 1;

// age -= 1;

// age *= 1;

// console.log(age);

// ------------------increment and decrement operators

// let h =12;

// h++;

// console.log(h);

// comparision operators

// let x = 99;

// if(x > 5)
// {
//     console.log("x is greater than 5")
// }

// if(x < 5)
// {
//     console.log("x is greater than 5")
// }

// if(x < 34)
// {
//     console.log("x is less than 34")
// }
// else{
//     console.log('x is greater than 34')
// }

// console.log(x >= 900);

// console.log(x <= 900);

// console.log(x != 900);


// ------------------------another case of checking variables with different datattypes

// case.1



// console.log(10 == "10");

// console.log(10 === "10");

// === this check the data and the data type are equal or not thats why the second option will show false

//------------------if-condition-is-manily-works-on-the-basics-of-comparision-operators

// let age;

// age = 23;

// if(age > 24){
//     console.log("you can marry");
// }
// else{
//     console.log("you cannot marry");
// }

//------login

// let user_name = "adithyan";

// let pass_word = 12348;

// if (user_name == "adithyan" && pass_word == 1234) {
//     console.log("wake up daddy is home");
// }
// else {
//     console.log("wake up daddy is not home");
// }

// let login = false;

// if(login == false){
//     console.log("what happened to you")
// }
// else{
//     console.log("wake up daddy is home");
// }

// --boolean-can-work-without-checking-for-comparision

// if(login){
//     console.log("wake up daddy is home");
// }
// else{
//     console.log("wake up daddy is not home");
// }

//-----------else-if-condition-when-there is-more-than-one-condition

// let number = 3;

// if(number == 1){
//     console.log("this is 1");
// }
// else if(number == 2){
//     console.log("this is 2");
// }
// else{
//     console.log("it is not  1 and 2");
// }


// logical operators

//-----------------loops
// loops are used to run a block of code multiple times .
// this line of code will execute when the condition is false

// three types of loops they are
// 1.for
// 2.while
// 3.do-while



// while loop

// let counter = 0;

// while(counter < 10)
// {
//     console.log(counter);
//     counter ++;
// }


// for loop


// for(i = 0; i < 10; i++)
// {
//     console.log(i);
// }

// =========================functions===================

// 2 functions yiu know now are alert and console.log

// js has around 1000 built-in functions

// date function etc

// we can call functions as many times according to our needs

//--------------------function-creating

// function-declaration

// function sayHello(){
//     console.log("Hello javascript")
// }

// sayHello(); calling the function


// function sayHello(){
//     console.log("Hello javascript")
// }

// sayHello();
// sayHello();
// sayHello();
// sayHello();

//=============parameters-and-arguments==================

// let namet = "adithyan";

// function sayName (namet){
//     console.log("welcome :"+ namet);
// }

// sayName(namet);



// function sayName (namet){
//     console.log("welcome :"+ namet);
// }

// sayName("abc");
// sayName("xyz");

// function sayName (num1,num2)
// { this is the parameters
//     console.log(num1 + num2);
// }

// sayName(1,2);this is arguments.when there is more than one parameter in the function order of the arguments matter
// sayName(5,7);

// function operations(num1,num2)
// {
//     if(num1 > num2)
//     {
//         console.log(num1 + num2);
//     }
// }

// operations(10,5);

// function add(num1,num2){
//     console.log(num1 + num2);
// }

// add(1,2);

// function sub(num1,num2){
//     console.log(num1 - num2);
// }

// sub(5,2);

//====================DOM====================document-object-model================

// dom is the bridge between html(website) and javascript

// document.write("hello");


// console.log("document")

// console.dir(document)

// console.dir(document.body)

// document.body.innerHTML = "hello html";

// document.body.innerHTML = "<h1>hello world</h1>";

// document.body.innerHTML = document.body.innerHTML + "<button>click me</button>";

// console.log(document.body.style);

// document.body.style.color ="blue";

// document.body.style.backgroundColor ="limegreen";


// function operation(a,b)
// {
//     console.log(a + b);
// }

// operation(1,2);

//===================js-video-two================
//=====================js-basics=================

// console.log("hello world");


// document.body.innerHTML =("hello world");

// document.body.style.backgroundColor = "green";

// document.body.style.fontSize = 40;

// document.body.innerHTML =( "hello world");


//==========math-operations============================

// in math operations the important thing is the order of operations

// multiply and divide done first and addition and substraction done second.The order of operations is also called operator precedence.
// also mutliply and division has same  priority.so if a problem like 2 * 6 / 3.it will calculated from left to right.
// it is also in the case of addition and substraction.if both the operators comes in a problem , the problem will be calculated from left to right.
// we can manipulate the order of calculations by using brackets.like the 1 + 1 * 3 will give 4 but (1 + 1) * 3 will give 6.
// brackets has the highest priority in the order of precedence,bracket comes first and then ,multiplication .division then last the addition and substraction.



// 2095 + 799
// 2894
// 20.95 + 7.99
// 28.939999999999998 to avoid the lots of numbers in the flaoting point we use it by calculating 
// the numbers without the floating point and at the end we will divided by the 100
// (2095 + 799) / 100
// 28.94
// how to round a number

// Math.round(2.778)
// 3

// ((2095 + 799) * 0.1) / 100
// 2.894

// Math.round((2095 + 799) * 0.1) / 100
// 2.89

// Math.round((2095 + 799) * 0.1)
// 289
// 289 / 100
// 2.89

// Math.round()-----------------to round a number
// Math.random()----------------to get a random number

//-----------------------working-with-text----------
// string
// rules
// you can use single quote or double qoute
// example 'hello'  "hello"
// concatenation in strings
// consider two strings they can be joined together by concatenation
// 'hello' + 'world' will be like helloworld
// to find the type of variable datatype
// 'hello' + 3
// 'hello3'
// typeof 'hrllo'
// 'string'

// '$' + (20.95 + 7.99)
// '$28.939999999999998' floating value is inaccurate add like below
// '$' + (2095 + 799) / 100

// '$28.94'

// strings and numbers---------------------------------------->

// 'items(' 1 + 1
// VM1014:1 Uncaught SyntaxError: Unexpected numberUnderstand this error
// 'Items (' + 1 + 1
// 'Items (11'
// 'Items (' + ( 1 + 1 )

// 'Items (2'
// 'Items (' + ( 1 + 1 ) + " ) : $ " + ( 2095 + 799 ) / 100


// 'Items (2 ) : $ 28.94'
// 'strings and numbers'
// 'strings and numbers'
// alert('Items (' + ( 1 + 1 ) + " ) : $ " + ( 2095 + 799 ) / 100);
// undefined
// 'srtings and addng numbers with them'
// 'srtings and addng numbers with them'
// character are-letter-number-special charcater-escape character-\'
// escape charcarters

// 'strings and numbers'
// 'strings and numbers'
// alert('Items (' + ( 1 + 1 ) + " ) : $ " + ( 2095 + 799 ) / 100);
// undefined
// 'srtings and addng numbers with them'
// 'srtings and addng numbers with them'
// 'I' + am going'
// VM1250:1 Uncaught SyntaxError: Unexpected identifier 'going'Understand this error
// "I' am going to study js "
// "I' am going to study js "
// /'
// VM1311:1 Uncaught SyntaxError: Invalid regular expression: missing /Understand this error
// \'
// VM1317:1 Uncaught SyntaxError: Invalid or unexpected tokenUnderstand this error
// 'I\' m learning js
// VM1367:1 Uncaught SyntaxError: Invalid or unexpected tokenUnderstand this error
// 'I\' m learning js '

// "I' m learning js "
// 'I\" m learning js '


// 'I" m learning js '
// 'I\n m learning js '


// 'I\n m learning js '
// alert('some\nline)
// VM1417:1 Uncaught SyntaxError: Invalid or unexpected tokenUnderstand this error
// alert('some\nline;

// VM1422:1 Uncaught SyntaxError: Invalid or unexpected tokenUnderstand this error
// alert('some\ntext');
// undefined

// `hello`
// 'hello'
// `we can create strings using patics`
// 'we can create strings using patics'
// `insert the values directly  into str:interpolation`
// 'insert the values directly  into str:interpolation'
// `items (${1 + 1})`
// 'items (2)'
// `items (${1 + 1}): $${(2095 + 799)/100}`

// 'items (2): $28.94'
// `interpolation much easier than concatenation`
// 'interpolation much easier than concatenation'
// `patic strings are also called template strings`
// 'patic strings are also called template strings'
// `pattic str has another feature called multi line strings`
// 'pattic str has another feature called multi line strings'
// `some
// text`
// 'some\ntext'
// alert(`some)
// VM1841:1 Uncaught SyntaxError: Unexpected end of inputUnderstand this error
// alert('some\ntext');
// undefined
// `use singlw quote for default`
// 'use singlw quote for default'
// `or use insert values into pattc strings `
// 'or use insert values into pattc strings '

// alert('some\ntext');

// `use single quote for default`
// 'use single quote for default'
// `or use insert values into pattc strings `
// 'or use insert values into pattc strings '

document.body.style.backgroundColor = "blue";

// console.log('hello world');

// console.dir('body' + 'dead');

// console.dir(document.body);

//=================variables===================

