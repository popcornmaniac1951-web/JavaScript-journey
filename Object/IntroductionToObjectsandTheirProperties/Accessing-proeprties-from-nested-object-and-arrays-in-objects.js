console.log("Accessing-proeprties-from-nested-object-and-arrays-in-objects")

const person = {
  name: "Alice",
  age: 30,
  contact: {
    email: "alice@example.com",
    phone: {
      home: "123-456-7890",
      work: "098-765-4321"
    }
  }
};

console.log("1. using the dot operator");

console.log(person.contact.email);

console.log("2. using the bracket notation");

console.log(person['contact']['email']);

console.log('3. Accessing properties from the nested array');

const proeprties = {
    name : 'athul',
    age : 20,
    address :[
        {type: 'home',street: 123,city: 'angamaly'},
        {type: 'villa',street: 345,city: 'kalady'},
        {type: 'home',street: 367,city: 'manajapra'}
    ]
};

console.log(proeprties.address[1].city);
console.log(proeprties.address[2].type);;
