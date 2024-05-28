const { sum, sub, mult, div } = require("./components/math.js")

const sumResult = sum(3,5);
const subResult = sub(3,5);
const multResult = mult(3,5);
const divResult = div(10,5);

console.log(`The SUM result is: ${sumResult}`)
console.log(`The SUB result is: ${subResult}`)
console.log(`The MULT result is: ${multResult}`)
console.log(`The DIV result is: ${divResult}`)