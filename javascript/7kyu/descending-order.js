const getDigits = (number) => String(number).split("");

const sortDigits = (digits) => digits.sort().reverse();

const convertToNumber = (digits) => Number.parseInt(digits.join(""));

const descendingOrder = (number) =>
  convertToNumber(sortDigits(getDigits(number)));
