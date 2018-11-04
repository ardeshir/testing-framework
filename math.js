const sum = (a, b) => a + b;
const sub = (a, b) => a - b;

const sumAsync = (...args) => Promise.resolve(sum(...args));
const subAsync = (...args) => Promise.resolve(sub(...args));

module.exports = { sum, sub, sumAsync, subAsync };
