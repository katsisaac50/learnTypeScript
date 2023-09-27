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
