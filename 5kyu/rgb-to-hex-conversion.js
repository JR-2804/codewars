const hex = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  10: "A",
  11: "B",
  12: "C",
  13: "D",
  14: "E",
  15: "F",
};

const toHex = (number, result = "") =>
  number < 16
    ? `${hex[number]}${result}`
    : toHex(Math.floor(number / 16), `${hex[number % 16]}${result}`);

const toRgbHex = (number) => {
  const result = toHex(number);

  return result.length === 1 ? `0${result}` : result;
};

const rgb = (red, green, blue) =>
  `${toRgbHex(red)}${toRgbHex(green)}${toRgbHex(blue)}`;

assert.strictEqual(rgb(255, 255, 255), "FFFFFF");
assert.strictEqual(rgb(255, 255, 300), "FFFFFF");
assert.strictEqual(rgb(0, 0, 0), "000000");
assert.strictEqual(rgb(148, 0, 211), "9400D3");
