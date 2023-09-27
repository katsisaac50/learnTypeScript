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
