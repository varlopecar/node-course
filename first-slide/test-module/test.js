const operators = require('./operators');

const math = operators.math;
const logic = operators.logic;

a = parseInt(process.argv[2]);
b = parseInt(process.argv[3]);

console.log(`a = ${a}`);
console.log(`b = ${b}`);

console.log(`sum = ${math.sum(a, b)}`);
console.log(`difference = ${math.difference(a, b)}`);
console.log(`product = ${math.product(a, b)}`);
console.log(`quotient = ${math.quotient(a, b)}`);

console.log(`a or b = ${logic.or(a, b)}`);
console.log(`a and b = ${logic.and(a, b)}`);