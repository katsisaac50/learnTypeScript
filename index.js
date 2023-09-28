"use strict";
let sport = 'football';
let id = 5;
id = "5";
// A tuple
let person = ['Danny', 1, true];
person[0] = 100;
person[1] = { name: 'Danny' }; // Error - person array can't contain objects
// union types
let person = ['Danny', 1, true];
person[0] = 100;
person[1] = { name: 'Danny' }; // Error - person array can't contain objects
// Functions in TypeScript
function add(a, b) {
    return a + b;
}
// classes in TypeScript
class Person {
    constructor(name, isCool, email, pets) {
        this.name = name;
        this.isCool = isCool;
        this.email = email;
        this.pets = pets;
    }
    sayMyName() {
        console.log(`Your not Heisenberg, you're ${this.name}`);
    }
}
const person1 = new Person('Danny', false, 'dan@e.com', 1);
console.log(person1.name); // Danny
// objects in TypeScript
// Declare a variable called person with a specific object type annotation
let person;
// Assign person to an object with all the necessary properties and value types
person = {
    name: 'Danny',
    location: 'UK',
    isProgrammer: true,
};
person.isProgrammer = 'Yes'; // ERROR: should be a boolean
person = {
    name: 'John',
    location: 'US',
};
let person1 = {
    name: 'Danny',
    location: 'UK',
    isProgrammer: true,
};
let person2 = {
    name: 'Sarah',
    location: 'Germany',
    isProgrammer: false,
};
let sayStuff = {
    sayHi: function (name) {
        return `Hi ${name}`;
    },
    sayBye: (name) => `Bye ${name}`,
};
console.log(sayStuff.sayHi('Heisenberg')); // Hi Heisenberg
console.log(sayStuff.sayBye('Heisenberg')); // Bye Heisenberg
// Functions in TypeScript
// Define a function called circle that takes a diam variable of type number, and returns a string
function circle(diam) {
    return 'The circumference is ' + Math.PI * diam;
}
console.log(circle(10)); // The circumference is 31.41592653589793
