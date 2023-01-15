const updateTravelData = (travelData, direction) => ({
  ...travelData,
  [direction]: travelData[direction] + 1,
});

const isValidWalk = (walk) => {
  const travelData = walk.reduce(updateTravelData, {
    n: 0,
    s: 0,
    e: 0,
    w: 0,
  });

  return (
    walk.length === 10 &&
    travelData.n === travelData.s &&
    travelData.e === travelData.w
  );
};

assert.strictEqual(
  isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']),
  true,
);
assert.strictEqual(
  isValidWalk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e']),
  false,
);
assert.strictEqual(isValidWalk(['w']), false);
assert.strictEqual(
  isValidWalk(['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's']),
  false,
);
