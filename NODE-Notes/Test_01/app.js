// const add = require("./math"); //commonjs
// const mult = require("./math"); // replaced with mult

/*
const { add, mult, subs, div, PI } = require("./math");

console.log(add(5, 10));
console.log(mult(5, 10));
console.log(subs(5, 10));
console.log(div(5, 10));
console.log(PI);
*/

const math = require("./math");


console.log(math.add(5, 10));
console.log(math.mult(5, 10));
console.log(math.subs(5, 10));
console.log(math.div(5, 10));
console.log(math.PI);

