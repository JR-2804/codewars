const getDigits = (number) => String(number).split("");

const multiplyDigits = (acc, digit) => acc * digit;

const persistence = (number) =>
  number < 10
    ? 0
    : persistence(getDigits(number).reduce(multiplyDigits, 1)) + 1;
