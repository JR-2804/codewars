const convertToArray = (number) => String(number).split('');

const digitize = (number) => convertToArray(number).reverse().map(Number);

assert.deepEqual(digitize(35231), [1, 3, 2, 5, 3]);
assert.deepEqual(digitize(0), [0]);
