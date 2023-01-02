const getDigits = (number) => String(number).split('');

const sortDigits = (digits) => digits.sort().reverse();

const convertToNumber = (digits) => Number.parseInt(digits.join(''));

const descendingOrder = (number) =>
  convertToNumber(sortDigits(getDigits(number)));

assert.strictEqual(descendingOrder(0), 0);
assert.strictEqual(descendingOrder(1), 1);
assert.strictEqual(descendingOrder(111), 111);
assert.strictEqual(descendingOrder(15), 51);
assert.strictEqual(descendingOrder(1021), 2110);
assert.strictEqual(descendingOrder(123456789), 987654321);
