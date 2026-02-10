let friends = ['a','b','c','d'];

console.log(friends[2]);

let [first,second,tird,fourth] = friends;

console.log(first);
console.log(second);
console.log(friends[1]);

//skip elements

let power = ['a','b','c','d'];

// c skiped
let [first1,second2,,third] = power;
console.log(first1);
console.log(second2);
console.log(third);

console.log('Array Destructer can be used to assign default values');

let abc = ['1','2','3','4']
let [a,b,c,d,e = '5'] = abc;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

console.log('Rest Syntax');

let abd = ['apple','mango','banana','ginger','balckberry','pineapple','kiwi'];
let [firs,secon, ...rest] = abd;

console.log(firs);
console.log(secon);
console.log(rest);




