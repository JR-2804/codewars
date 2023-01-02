const isNotZero = (element) => element !== 0;

const isZero = (element) => element === 0;

const moveZeros = (array) =>
  array.filter(isNotZero).concat(array.filter(isZero));

assert.deepEqual(
  moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]),
  [1, 2, 1, 1, 3, 1, 0, 0, 0, 0],
);
