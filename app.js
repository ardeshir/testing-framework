//const sum = (a,b) => a + b
//const sub = (a, b) => a - b

const {sum, sub} = require('./math')

let result = sum(3, 7)
let expected = 10

expect(result).toBe(expected)

/* if (result !== expected) {
 throw new Error(`${result} is not equal to ${expected}`)

} else {
 console.log("sum() expected: " + expected + " == result: " + result)
}
*/

result = sub(7, 3)
expected = 4

expect(result).toBe(expected)

/* NICE ABSTRCTION */

/* 
if (result !== expected) {
 throw new Error(`${result} is not equal to ${expected}`)

} else {
 console.log("sub() expected: " + expected  + " == result: " + result)
}
*/

// expect(resutl).toBe(expected)

function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`)
      }
    },
  }
}
