// =====================================================
// COMPLETE OBJECT MASTER FILE – Practice Everything
// =====================================================

console.log("===== 1. Creating Objects =====");

const person = {
  name: "Adithyan",
  age: 20,
  location: "Angamaly",
  contact: {
    email: "adithyan@email.com",
    phone: {
      home: "1234567890",
      work: "0987654321"
    }
  },
  skills: ["HTML", "CSS", "JavaScript"],
  greet: function () {
    return "Hello, my name is " + this.name;
  }
};

console.log(person);
console.log(person.greet());


// =====================================================
// 2. Accessing Properties
// =====================================================

console.log("===== 2. Accessing Properties =====");

console.log(person.name); // dot notation
console.log(person["age"]); // bracket notation
console.log(person.contact.email);
console.log(person["contact"]["phone"]["home"]);
console.log(person.skills[1]); // array inside object


// =====================================================
// 3. Adding & Updating Properties
// =====================================================

console.log("===== 3. Adding & Updating =====");

person.country = "India";
person["experience"] = 2;

person.age = 21;

console.log(person);


// =====================================================
// 4. Deleting Properties
// =====================================================

console.log("===== 4. Deleting Property =====");

delete person.location;
console.log(person);


// =====================================================
// 5. Checking Property Existence
// =====================================================

console.log("===== 5. Checking Properties =====");

console.log(person.hasOwnProperty("name"));
console.log("age" in person);
console.log(person.salary !== undefined);


// =====================================================
// 6. Object.keys, values, entries
// =====================================================

console.log("===== 6. Keys, Values, Entries =====");

console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));


// =====================================================
// 7. Looping Through Object
// =====================================================

console.log("===== 7. Looping (for...in) =====");

for (let key in person) {
  console.log(key, ":", person[key]);
}

console.log("===== Loop using entries =====");

for (let [key, value] of Object.entries(person)) {
  console.log(key, "=>", value);
}


// =====================================================
// 8. Copying Objects (Reference vs Copy)
// =====================================================

console.log("===== 8. Reference vs Copy =====");

let referenceCopy = person;
referenceCopy.age = 30;

console.log("Original age after reference change:", person.age);

let shallowCopy = { ...person };
shallowCopy.age = 50;

console.log("Original age after spread copy:", person.age);


// =====================================================
// 9. Object.assign()
// =====================================================

console.log("===== 9. Object.assign =====");

let assignCopy = Object.assign({}, person);
console.log(assignCopy);


// =====================================================
// 10. Object.freeze()
// =====================================================

console.log("===== 10. Object.freeze =====");

const frozenObj = { a: 1 };
Object.freeze(frozenObj);
frozenObj.a = 5; // will not change

console.log(frozenObj);


// =====================================================
// 11. Object.seal()
// =====================================================

console.log("===== 11. Object.seal =====");

const sealedObj = { b: 2 };
Object.seal(sealedObj);

sealedObj.b = 10; // allowed
sealedObj.c = 20; // not allowed

console.log(sealedObj);


// =====================================================
// 12. Destructuring
// =====================================================

console.log("===== 12. Destructuring =====");

const { name, age, country = "Unknown" } = person;

console.log(name);
console.log(age);
console.log(country);


// =====================================================
// 13. Optional Chaining
// =====================================================

console.log("===== 13. Optional Chaining =====");

console.log(person.contact?.phone?.work);
console.log(person.address?.street); // undefined safely


// =====================================================
// 14. JSON Conversion
// =====================================================

console.log("===== 14. JSON Conversion =====");

let jsonString = JSON.stringify(person);
console.log(jsonString);

let parsedObject = JSON.parse(jsonString);
console.log(parsedObject);


// =====================================================
// 15. Object.create()
// =====================================================

console.log("===== 15. Object.create =====");

const prototypeObj = {
  sayHi() {
    return "Hi from prototype!";
  }
};

const newObj = Object.create(prototypeObj);
console.log(newObj.sayHi());


// =====================================================
// 16. Object.defineProperty()
// =====================================================

console.log("===== 16. defineProperty =====");

const user = {};
Object.defineProperty(user, "id", {
  value: 101,
  writable: false,
  enumerable: true
});

console.log(user.id);
user.id = 500; // won't change
console.log(user.id);


// =====================================================
// 17. Object.preventExtensions()
// =====================================================

console.log("===== 17. preventExtensions =====");

const simple = { x: 1 };
Object.preventExtensions(simple);

simple.y = 2; // not allowed
console.log(simple);


// =====================================================
// END OF OBJECT MASTER FILE
// =====================================================

console.log("===== DONE: Object Master Practice Completed =====");
