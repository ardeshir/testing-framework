//const sum = (a,b) => a + b
//const sub = (a, b) => a - b

const {sum, sub} = require('./math')

let result   = sum(3, 7)
let expected = 10

if (result !== expected) {
 throw new Error(`${result} is not equal to ${expected}`)

} else {
 console.log("sum() expected: " + expected + " == result: " + result)
}

result   = sub(7, 3)
expected = 4

if (result !== expected) {
 throw new Error(`${result} is not equal to ${expected}`)

} else {
 console.log("sub() expected: " + expected  + " == result: " + result)
}
