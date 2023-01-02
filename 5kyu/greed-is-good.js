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

assert.deepEqual(score([1, 1, 1, 3, 1]), 1100);
assert.deepEqual(score([2, 3, 4, 6, 2]), 0);
assert.deepEqual(score([4, 4, 4, 3, 3]), 400);
assert.deepEqual(score([2, 4, 4, 5, 4]), 450);
assert.deepEqual(score([5, 1, 3, 4, 1]), 250);
assert.deepEqual(score([2, 4, 4, 5, 4]), 450);
