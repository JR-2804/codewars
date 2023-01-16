const isDifferentThan = (numberIndex) => (_, currentNumberIndex) => {
  return currentNumberIndex !== numberIndex;
};

const isNumber = (number) => (currentNumber) => currentNumber === number;

const concatenateAfter = (number) => (permutation) => {
  return `${number}${permutation}`;
};

const findPermutationsStartingWithNumber = (number, numberIndex, list) => {
  const sublist = list.filter(isDifferentThan(numberIndex));
  return findPermutations(sublist).map(concatenateAfter(number));
};

const cache = new Map();
const findPermutations = (list) => {
  if (list.length === 1) {
    return list;
  }

  const processedList = [...list].sort().join("");
  if (cache.get(processedList)) {
    return cache.get(processedList);
  }

  const result = list.flatMap(findPermutationsStartingWithNumber);
  cache.set(processedList, result);
  return result;
};

const removeDuplicates = (result, current) => {
  return result[result.length - 1] !== current
    ? [...result, current]
    : [...result];
};

const nextBigger = (number) => {
  const permutations = findPermutations(String(number).split(""))
    .map(Number)
    .sort()
    .reduce(removeDuplicates, []);

  const index = permutations.findIndex(isNumber(number));

  return index < permutations.length ? permutations[index + 1] : -1;
};
