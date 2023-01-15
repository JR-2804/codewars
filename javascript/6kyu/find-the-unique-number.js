const numberMetadata = (acc, number) => ({
  ...acc,
  [number]: {
    number,
    count: acc[number]?.count + 1 || 1,
  },
});

const generateMetadata = (array) =>
  Object.values(array.reduce(numberMetadata, {}));

const uniqueNumber = ({ count }) => count === 1;

const findUniq = (array) => generateMetadata(array).find(uniqueNumber).number;

assert.strictEqual(findUniq([1, 0, 0]), 1);
assert.strictEqual(findUniq([0, 1, 0]), 1);
assert.strictEqual(findUniq([0, 0, 1]), 1);
assert.strictEqual(findUniq([1, 1, 1, 2, 1, 1]), 2);
assert.strictEqual(findUniq([1, 1, 2, 1, 1]), 2);
assert.strictEqual(findUniq([3, 10, 3, 3, 3]), 10);
