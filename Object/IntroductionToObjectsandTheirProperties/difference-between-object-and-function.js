console.log('1. objects');

const person = {
    name : 'athul',
    age : 23,
    location : 'manjapra',
    contact : {email : 'adithyants37@gmail.com'},
    phone : {home : 12345,work : 678910}
}

console.log(person['contact']['email']);

const gta = {
    name : 'gtavicecity',
    age : 10,
    text : function(){
        return "Hello, my name is " + this.name;
    }
};


console.log(gta.text());

console.log('The this keyword allows the text method to access the properties of the object named gta. ');