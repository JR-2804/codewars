const getDigits = (number) => String(number).split("").map(Number);

const calculateDigit = (number) => (acc, digit) =>
  acc + Math.pow(digit, String(number).length);

const narcissistic = (number) =>
  getDigits(number).reduce(calculateDigit(number), 0) === number;
