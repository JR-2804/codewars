const countCharacters = (acc: Map<number, number>, number: number) => {
  const currentCount = acc.get(number);
  if (currentCount) {
    acc.set(number, currentCount + 1);
    return acc;
  }

  acc.set(number, 1);
  return acc;
};

const findOdd = (numbers: number[]): number => {
  const result = [
    ...numbers.reduce(countCharacters, new Map<number, number>()).entries(),
  ].find((d) => d[1] % 2 !== 0);

  return result ? result[0] : -1;
};

export { findOdd };
