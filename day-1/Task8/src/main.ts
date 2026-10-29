// this will cause type any rule. can be fixed by adding type to name
function greet(name) {
  console.log("hello ", name);
}

greet("anjal");

//this will cause strictNullCheck. can be handled by add a type null or undefined with union
let firstName: string = null;

function greetSample(name: string) {
  console.log("hello ", name);
}
// this will cause error because funtion types are different. it is caused by strickFunctionTypes
type FnType = (name: string | number) => void;
let greetFn: FnType = greetSample;
greetFn(21);

// this will cause noUncheckedIndexedAccess. this can be handled by addeing type undefined to one and access the value by type narroing
let numbers: number[] = [];
const one: number = numbers[1];
console.log(one);
