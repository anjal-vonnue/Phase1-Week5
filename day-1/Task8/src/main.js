"use strict";
// this will cause type any rule. can be fixed by adding type to name
function greet(name) {
    console.log("hello ", name);
}
greet("anjal");
//this will cause strictNullCheck. can be handled by add a type null or undefined with union
let firstName = null;
function greetSample(name) {
    console.log("hello ", name);
}
let greetFn = greetSample;
greetFn(21);
