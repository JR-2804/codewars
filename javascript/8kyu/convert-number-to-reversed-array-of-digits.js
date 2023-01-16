const convertToArray = (number) => String(number).split("");

const digitize = (number) => convertToArray(number).reverse().map(Number);
