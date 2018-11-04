//const sum = (a,b) => a + b
//const sub = (a, b) => a - b

const { sumAsync, subAsync } = require("./math");
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
test("sumAsync() adds numbers asynchronously", async () => {
  const result = await sumAsync(3, 7);
  const expected = 10;
  expect(result).toBe(expected);
});

test("subAsync() substracts numbers", async () => {
  const result = await subAsync(7, 3);
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

async function test(title, callback) {
  try {
    await callback();
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
