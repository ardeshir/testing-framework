//const sum = (a,b) => a + b
//const sub = (a, b) => a - b

const { sum, sub } = require("./math");
/*
// refactured into arrow functions inside the test function 
function sumTest() {
  const result   = sum(3, 7)
  const expected = 10
  expect(result).toBe(expected)
}

function subTest() {
  const result   = sub(7, 3)
  const expected = 4
  expect(result).toBe(expected)
}
*/
test("sum() adds numbers", () => {
  const result = sum(3, 7);
  const expected = 10;
  expect(result).toBe(expected);
});

test("sub() substracts numbers", () => {
  const result = sub(7, 3);
  const expected = 4;
  expect(result).toBe(expected);
});
/* if (result !== expected) {
 throw new Error(`${result} is not equal to ${expected}`)

} else {
 console.log("sum() expected: " + expected + " == result: " + result)
}
*/

/* NICE ABSTRCTION */
/*
if (result !== expected) {
 throw new Error(`${result} is not equal to ${expected}`)

} else {
 console.log("sub() expected: " + expected  + " == result: " + result)
}
*/

// expect(resutl).toBe(expected)

function test(title, callback) {
  try {
    callback();
    console.log(`Passed: ${title}`);
  } catch (error) {
    console.error(`Failed:  ${title}`);
    console.error(error);
  }
}

function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`);
      }
    }
  };
}
