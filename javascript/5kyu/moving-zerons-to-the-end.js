const isNotZero = (element) => element !== 0;

const isZero = (element) => element === 0;

const moveZeros = (array) =>
  array.filter(isNotZero).concat(array.filter(isZero));
