const getDigits = (number) => String(number).split('').map(Number);

const calculateDigit = (number) => (acc, digit) =>
  acc + Math.pow(digit, String(number).length);

const narcissistic = (number) =>
  getDigits(number).reduce(calculateDigit(number), 0) === number;

// Should find small numbers are all narcissistic
assert.strictEqual(narcissistic(7), true);

// Should find these numbers are narcissistic
assert.strictEqual(narcissistic(371), true);
