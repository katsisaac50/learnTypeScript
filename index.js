var sport = 'football';
var id = 5;
id = "5";
// A tuple
var person = ['Danny', 1, true];
person[0] = 100;
person[1] = { name: 'Danny' }; // Error - person array can't contain objects
// union types
var person = ['Danny', 1, true];
person[0] = 100;
person[1] = { name: 'Danny' }; // Error - person array can't contain objects
// Functions in TypeScript
function add(a, b) {
    return a + b;
}
// classes in TypeScript
var Person = /** @class */ (function () {
    function Person(name, isCool, email, pets) {
        this.name = name;
        this.isCool = isCool;
        this.email = email;
        this.pets = pets;
    }
    Person.prototype.sayMyName = function () {
        console.log("Your not Heisenberg, you're ".concat(this.name));
    };
    return Person;
}());
var person1 = new Person('Danny', false, 'dan@e.com', 1);
console.log(person1.name); // Danny
// objects in TypeScript
// Declare a variable called person with a specific object type annotation
var person;
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
var person1 = {
    name: 'Danny',
    location: 'UK',
    isProgrammer: true,
};
var person2 = {
    name: 'Sarah',
    location: 'Germany',
    isProgrammer: false,
};
var sayStuff = {
    sayHi: function (name) {
        return "Hi ".concat(name);
    },
    sayBye: function (name) { return "Bye ".concat(name); },
};
console.log(sayStuff.sayHi('Heisenberg')); // Hi Heisenberg
console.log(sayStuff.sayBye('Heisenberg')); // Bye Heisenberg
// Functions in TypeScript
// Define a function called circle that takes a diam variable of type number, and returns a string
function circle(diam) {
    return 'The circumference is ' + Math.PI * diam;
}
console.log(circle(10)); // The circumference is 31.41592653589793
// The same function, but with an ES6 arrow function
var circle = function (diam) {
    return 'The circumference is ' + Math.PI * diam;
};
console.log(circle(10)); // The circumference is 31.41592653589793
// Using explicit typing 
var circle = function (diam) {
    return 'The circumference is ' + Math.PI * diam;
};
// Inferred typing - TypeScript sees that circle is a function that always returns a string, so no need to explicitly state it
var circle = function (diam) {
    return 'The circumference is ' + Math.PI * diam;
};
// passing optional parameters in a function in TypeScript
var add = function (a, b, c) {
    console.log(c);
    return a + b;
};
console.log(add(5, 4, 'I could pass a number, string, or nothing here!'));
// I could pass a number, string, or nothing here!
// 9
// Function that return void
// Declare the varible sayHello, and give it a function signature that takes a string and returns nothing.
var sayHello;
// Define the function, satisfying its signature
sayHello = function (name) {
    console.log('Hello ' + name);
};
sayHello('Danny'); // Hello Danny
function addNum(a, b) {
    console.log('Drinking');
    return (a + b).toString();
}
addNum(1, 2); // 3
// classes in TypeScript
var Person = /** @class */ (function () {
    function Person(a, b, c, d) {
        this.name = a;
        this.isCool = b;
        this.email = c;
        this.pets = d;
    }
    Person.prototype.sayHi = function () {
        console.log("Hi ".concat(this.name));
    };
    return Person;
}());
person1 = new Person('Danny', false, 'dan@e.com', 1);
console.log(person1.email); // dan@e.com
// writing in class in conscise
var Person = /** @class */ (function () {
    function Person(name, isCool, email, pets) {
        this.name = name;
        this.isCool = isCool;
        this.email = email;
        this.pets = pets;
    }
    Person.prototype.sayMyName = function () {
        console.log("Your not Heisenberg, you're ".concat(this.name));
    };
    return Person;
}());
var person1 = new Person('Danny', false, 'dan@e.com', 1);
console.log(person1.name); // Danny

var person1 = {
    name: "John",
    age: 48,
    speak: function (sentence) { return console.log(sentence); },
};

person1.speak("Hello");

// Structural Type System
interface Point {
    x: number;
    y: number;
    z: Number;
  }
   
  function logPoint(p: Point) {
    console.log(`${p.x}, ${p.y}`);
  }
   
  // logs "12, 26"
  const point = { x: 12, y: 26 };
  logPoint(point);