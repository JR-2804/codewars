const hanoiSteps1 = (numberOfDisks) => {
  let numberOfSteps = 0;

  for (let i = 1; i <= numberOfDisks; i++) {
    numberOfSteps = numberOfSteps * 2 + 1;
  }

  return numberOfSteps;
};

const hanoiSteps2 = (numberOfDisks) =>
  numberOfDisks <= 0 ? 0 : hanoiSteps2(numberOfDisks - 1) * 2 + 1;

///////////////////////////////////////////////////////////////////////////////////////////////////

assert.strictEqual(hanoiSteps1(0), 0);
assert.strictEqual(hanoiSteps1(1), 1);
assert.strictEqual(hanoiSteps1(2), 3);
assert.strictEqual(hanoiSteps1(3), 7);

assert.strictEqual(hanoiSteps2(0), 0);
assert.strictEqual(hanoiSteps2(1), 1);
assert.strictEqual(hanoiSteps2(2), 3);
assert.strictEqual(hanoiSteps2(3), 7);
