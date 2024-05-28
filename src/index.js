const { sum, sub, mult } = require("./components/math.js")

const sumResult = sum(3,5);
const subResult = sub(3,5);
const multResult = mult(3,5);

console.log(`The SUM result is: ${sumResult}`)
console.log(`The SUB result is: ${subResult}`)
console.log(`The MULT result is: ${multResult}`)