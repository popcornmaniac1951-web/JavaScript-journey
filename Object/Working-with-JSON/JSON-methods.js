console.log('JSON method:1 JSON.stringify()'); // object to text string convert

const xyz = {
    name : "athul",
    age : 23,
    place : "manjapra"
}

const examplestring = JSON.stringify(xyz);
console.log(examplestring);
console.log(typeof examplestring);

const developerObj = {
  firstName: "Jessica",
  isAwesome: true,
  isMusician: true,
  country: "USA",
};

// result: {"firstName":"Jessica","country":"USA"}
console.log(JSON.stringify(developerObj, ["firstName", "country"]));
console.log(JSON.stringify(developerObj, null, 2));


console.log('JSON method:2 JSON.parse()'); // text string to object convert

const anotherstring = '{"name":"Alice","age":25}';
const xray = JSON.parse(anotherstring);
console.log(typeof xray);
console.log(xray);
console.log(xray.age);