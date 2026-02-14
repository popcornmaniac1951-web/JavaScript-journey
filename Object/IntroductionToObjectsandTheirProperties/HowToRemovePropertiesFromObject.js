const person ={
    name : "adithyan",
    age : 34,
    location : "angamaly",
    qualification : "BCA"
};

console.log(person.name);
console.log(person['name']);

delete person.location; // 1st type deletion

console.log(person.location);
console.log("now the location property is deleted from the object person");

const home = {
    name : "thayampadavil house",
    homenathan: "shaji",
    hommemother : 'sheela',
    monnamon : 'adithyan'
};

console.log(home.monnamon + ' is a good boy with hardworking mindset.');

const {name, ...remainingones } = home;  // 2nd type deletion

console.log(remainingones);