const a = process.argv[2];
const b = process.argv[3];

const sum = (a, b) => a + b
const difference = (a, b) => a - b
const product = (a, b) => a * b
const quotient = (a, b) => a / b

module.exports = {
    sum,
    difference,
    product,
    quotient
}