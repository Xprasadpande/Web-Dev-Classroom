// let n = 5;

// for (let i = 0; i < n; i++) {
//   console.log("hello ", i);
// }

// console.log("bye");

// let args = process.argv;

// for (let i = 2; i < args.length; i++) {
//   console.log("hello ", args[i]);
// }

// const someValue = require("./math");

// console.log(someValue);

// const info = require("./Fruits");

// console.log(info[1].name);

import { sum, PI } from "./math.js";
import { generate } from "random-words";

console.log(sum(2, 2));
console.log(generate());
