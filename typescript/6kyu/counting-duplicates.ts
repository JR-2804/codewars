const countCharacters = (acc: Map<string, number>, character: string) => {
  const currentCount = acc.get(character);
  if (currentCount) {
    acc.set(character, currentCount + 1);
    return acc;
  }

  acc.set(character, 1);
  return acc;
};

const occursTwoOrMoreTimes = (character: [string, number]) => character[1] > 1;

const duplicateCount = (text: string): number =>
  [
    ...text
      .toLowerCase()
      .split("")
      .reduce(countCharacters, new Map<string, number>())
      .entries(),
  ].filter(occursTwoOrMoreTimes).length;

export { duplicateCount };
