// ==============================
// 1. Boolean Values
// ==============================

let name = true;
console.log(name);

let father = false;
console.log(father);

let ageStatus = true;
console.log(ageStatus);


// ==============================
// 2. Basic If-Else (Boolean Check)
// ==============================

let oldage = true;

if (oldage) {
    console.log('you are old');
} else {
    console.log('you are not old');
}

let oldman = false;

if (oldman) {
    console.log('you are a old man');
} else {
    console.log('you are not a old man');
}


// ==============================
// 3. Equality & Comparison Operators
// ==============================

let a = 5;
let b = 5;
let c = '5';

console.log(a == c);   // equality operator
console.log(a === c);  // strict equality operator
console.log(a == b);
console.log(a != c);   // inequality operator
console.log(a !== c);  // strict inequality operator

let x = 5;
let y = 4;

console.log(x > y);
console.log(x < y);
console.log(x >= y);
console.log(x <= y);
console.log(x == y);
console.log(x != y);


// ==============================
// 4. Logical AND (&&)
// ==============================

const result = true && 'hello';
console.log(result);

const results = 0 && 3;
console.log(results);

const resultd = false && 0;
console.log(resultd);

if (2 < 3 && 3 < 4) {
    console.log('The if block runs');
} else {
    console.log('The else block runs');
}


// ==============================
// 5. Logical OR (||)
// ==============================

const resul = 'This is truthy' || false;
console.log(resul);

const resut = 0 || 'This is truthy';
console.log(resut);

let userInput;

if (userInput || 'Guest') {
    console.log('A user is present');
} else {
    console.log('No user detected');
}


// ==============================
// 6. Nullish Coalescing (??)
// ==============================

const esult = null ?? 'default';
console.log(esult);

const userSettings = {
    theme: null,
    volume: 0,
    notifications: false,
};

let theme = userSettings.theme ?? 'light';
console.log(theme);


// ==============================
// 7. Truthy & Falsy Values
// ==============================

if (null) {
    console.log("This will not run.");
}

if ("freeCodeCamp") {
    console.log("This will run.");
}


// ==============================
// 8. If Conditions (Voting Example)
// ==============================

const ages = 22;

if (ages >= 18) {
    console.log("You're eligible to vote");
}

const ageCheck = 15;

if (ageCheck >= 18) {
    console.log("You're eligible to vote");
}

const aged = 15;

if (aged >= 18) {
    console.log("You're eligible to vote");
} else {
    console.log("You're not eligible to vote");
}


// ==============================
// 9. Else If Ladder
// ==============================

const score = 87;

if (score >= 90) {
    console.log('You got an A');
} else if (score >= 80) {
    console.log('You got a B');
} else if (score >= 70) {
    console.log('You got a C');
} else {
    console.log('You failed! You need to study more!');
}


// ==============================
// 10. Ternary Operator
// ==============================

const temperature = 30;
const weather = temperature > 25 ? 'sunny' : 'cool';

console.log(`It's a ${weather} day!`);


// ==============================
// 11. Math.random()
// ==============================

const randomNum = Math.random();
console.log(randomNum);


// ==============================
// 12. Math.min() & Math.max()
// ==============================

const smallest = Math.min(1, 5, 3, 9);
console.log(smallest);

const largest = Math.max(1, 5, 3, 9);
console.log(largest);


// ==============================
// 13. Math.ceil() & Math.floor()
// ==============================

console.log(Math.ceil(4.3));
console.log(Math.floor(4.3));


// ==============================
// 14. Math.round()
// ==============================

console.log(Math.round(2.3));
console.log(Math.round(4.5));
console.log(Math.round(4.8));


// ==============================
// 15. Random Number Between Min & Max
// ==============================

const max = 10;
const min = 5;
const randomNumr = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomNumr);


// ==============================
// 16. Random Between 1 and 20
// ==============================

const randomNumBtw1And20 = Math.floor(Math.random() * 20) + 1;
console.log(randomNumBtw1And20);


// ==============================
// 17. Math.trunc()
// ==============================

console.log(Math.trunc(2.9));
console.log(Math.trunc(9.1));


// ==============================
// 18. Math.sqrt() & Math.cbrt()
// ==============================

console.log(Math.sqrt(81));
console.log(Math.cbrt(27));


// ==============================
// 19. Math.abs()
// ==============================

console.log(Math.abs(-5));
console.log(Math.abs(5));


// ==============================
// 20. Math.pow()
// ==============================

console.log(Math.pow(2, 3));
console.log(Math.pow(8, 2));
