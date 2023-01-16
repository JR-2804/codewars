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
