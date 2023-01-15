const countExesAndOhs = (
  count: { numberOfX: number; numberOfO: number },
  character: string,
) => {
  if (character === "x") {
    return { ...count, numberOfX: count.numberOfX + 1 };
  }

  if (character === "o") {
    return { ...count, numberOfO: count.numberOfO + 1 };
  }

  return count;
};

const xo = (text: string): boolean => {
  const result = text
    .toLowerCase()
    .split("")
    .reduce(countExesAndOhs, { numberOfX: 0, numberOfO: 0 });

  return result.numberOfX === result.numberOfO;
};

export { xo };
