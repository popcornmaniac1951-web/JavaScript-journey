

function emailcheck(email){

let domain = email.split('@');

let dom1 = domain[0];
// console.log(dom1);
let dom2 = domain[1];
// console.log(dom2);

let firstlet = dom1[0];
let lastlet = dom1[dom1.length - 1];
// console.log(firstlet);
// console.log(lastlet);

let star = '*'.repeat(dom1.length - 2);
// console.log(star);

const finaloutput = firstlet + star + lastlet + '@' + dom2;
console.log(finaloutput);

}

emailcheck('adithyants374@gmail.com');