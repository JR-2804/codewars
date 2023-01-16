const scoreTable = {
  1: 1000,
  2: 200,
  3: 300,
  4: 400,
  5: 500,
  6: 600,
};

const score = (dices) => {
  const dicesMap = dices.reduce(
    (map, dice) => map.set(dice, map.get(dice) + 1 || 1),
    new Map(),
  );

  for (let i = 1; i <= 6; i++) {
    if (dicesMap.get(i) >= 3) {
      dicesMap.set(i, dicesMap.get(i) - 3);

      return (
        scoreTable[i] +
        (dicesMap.get(1) || 0) * 100 +
        (dicesMap.get(5) || 0) * 50
      );
    }
  }

  return (dicesMap.get(1) || 0) * 100 + (dicesMap.get(5) || 0) * 50;
};
