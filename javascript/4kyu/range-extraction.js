const numbersAreInRange = (number1, number2) => {
  return (
    number1 === undefined || number2 === undefined || number1 - number2 === 1
  );
};

const toRanges = ({ ranges, currentRange, previousNumber }, currentNumber) => {
  return numbersAreInRange(currentNumber, previousNumber)
    ? {
        ranges: [...ranges],
        currentRange: [...currentRange, currentNumber],
        previousNumber: currentNumber,
      }
    : {
        ranges: [...ranges, currentRange],
        currentRange: [currentNumber],
        previousNumber: currentNumber,
      };
};

const parseRange = (range) => {
  return range.length < 3 ? range : `${range[0]}-${range[range.length - 1]}`;
};

const solution = (list) => {
  const result = list.reduce(toRanges, {
    ranges: [],
    currentRange: [],
    previousNumber: undefined,
  });

  return [...result.ranges, result.currentRange].flatMap(parseRange).join();
};

assert.deepEqual(
  solution([-3, -2, -1, 2, 10, 15, 16, 18, 19, 20]),
  "-3--1,2,10,15,16,18-20",
);

assert.deepEqual(
  solution([
    -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20,
  ]),
  "-6,-3-1,3-5,7-11,14,15,17-20",
);
