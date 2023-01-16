const nbYear = (
  p0: number,
  percent: number,
  aug: number,
  p: number,
): number => {
  let numberOfYears = 0;
  let population = p0;

  while (population < p) {
    population += Math.floor((population * percent) / 100 + aug);
    numberOfYears++;
  }

  return numberOfYears;
};

export { nbYear };
