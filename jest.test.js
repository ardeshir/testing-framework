const {sumAsync, subAsync} = require('./math')
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
test('sumAsync() adds numbers asynchronously', async () => {
  const result   =  await sumAsync(3, 7)
  const expected = 10
  expect(result).toBe(expected)
})

test('subAsync() substracts numbers', async () => {
  const result   = await subAsync(7, 3)
  const expected = 4
  expect(result).toBe(expected)

})
