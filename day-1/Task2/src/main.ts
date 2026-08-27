//link: https://www.w3schools.com/typescript/typescript_tuples.php
//link: https://www.geeksforgeeks.org/typescript/explain-the-purpose-of-never-type-in-typescript-2/

let firstName: string = "anjal";
let age: number = 22;
let haveDrivingLisence: boolean = true;
let nullVariable: null = null;
let undefinedVariable: undefined = undefined;
let luckyNumber: symbol = Symbol(7);
let bigIntVariable: bigint = 12323423425235244234324234234324342342342342334n;

let mealType: any = "veg";
let mealTypeBetter: unknown = "non-veg";

const compilerOptions = {
  strict: true,
  target: "es2022",
  module: "es2022",
  outDir: "dist",
  rootDir: "src",
} as const;

let user: object = {
  name: "anjal",
  age: 22,
};

let numbers: number[] = [1, 2, 3, 4];

let person: [string, number] = ["anjal", 22];

let unionVariable: string | number = "string";
unionVariable = 1;

function throwTypeError(str: string): never {
  throw new TypeError(str);
}

function greet(name: string): void {
  console.log(name);
}

let statusTodo: "completed" | "pending" | "deleted" = "completed";

//////

function add(a: number, b: number): number {
  return a + b;
}

function isCompleted(status: string): boolean {
  return status === "completed";
}

function isValid(age: number): boolean {
  return age > 18;
}

function greatPerson(name: string): string {
  return `hello, ${name}`;
}

function serverLog(msg: string): void {
  console.log(`${Date.now()} ---- ${msg}`);
}

const greeting = "Hello";
// greeting = "hi"; // can modify because it is literal
let greetingString = "hello";
greetingString = "hi"; // can modify because it is string

function differentValueProccessing(value: string | number): string {
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
