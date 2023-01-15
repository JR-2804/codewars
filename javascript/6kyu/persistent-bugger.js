const getDigits = (number) => String(number).split('');

const multiplyDigits = (acc, digit) => acc * digit;

const persistence = (number) =>
  number < 10
    ? 0
    : persistence(getDigits(number).reduce(multiplyDigits, 1)) + 1;

assert.strictEqual(persistence(39), 3);
assert.strictEqual(persistence(4), 0);
assert.strictEqual(persistence(2), 0);
assert.strictEqual(persistence(25), 2);
assert.strictEqual(persistence(999), 4);
assert.strictEqual(persistence(4083839), 1);
