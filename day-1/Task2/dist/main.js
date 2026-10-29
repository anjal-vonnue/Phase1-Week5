"use strict";
//link: https://www.w3schools.com/typescript/typescript_tuples.php
//link: https://www.geeksforgeeks.org/typescript/explain-the-purpose-of-never-type-in-typescript-2/
let firstName = "anjal";
let age = 22;
let haveDrivingLisence = true;
let nullVariable = null;
let undefinedVariable = undefined;
let luckyNumber = Symbol(7);
let bigIntVariable = 12323423425235244234324234234324342342342342334n;
let mealType = "veg";
let mealTypeBetter = "non-veg";
const compilerOptions = {
    strict: true,
    target: "es2022",
    module: "es2022",
    outDir: "dist",
    rootDir: "src",
};
let user = {
    name: "anjal",
    age: 22,
};
let numbers = [1, 2, 3, 4];
let person = ["anjal", 22];
let unionVariable = "string";
unionVariable = 1;
function throwTypeError(str) {
    throw new TypeError(str);
}
function greet(name) {
    console.log(name);
}
let statusTodo = "completed";
//////
function add(a, b) {
    return a + b;
}
function isCompleted(status) {
    return status === "completed";
}
function isValid(age) {
    return age > 18;
}
function greatPerson(name) {
    return `hello, ${name}`;
}
function serverLog(msg) {
    console.log(`${Date.now()} ---- ${msg}`);
}
const greeting = "Hello";
// greeting = "hi"; // can modify because it is literal
let greetingString = "hello";
greetingString = "hi"; // can modify because it is string
function differentValueProccessing(value) {
    if (typeof value === "string") {
        return `the value: ${value} is a string`;
    }
    if (typeof value === "number") {
        return `the value: ${value} is a number`;
    }
    return "pass a valid value";
}
console.log(differentValueProccessing("anjal"));
console.log(differentValueProccessing(22));
