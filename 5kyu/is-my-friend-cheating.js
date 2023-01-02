const removeNb = (n) => {
  let totalSum = 0;

  for (let i = 1; i < n + 1; i++) {
    totalSum += i;
  }

  for (let i = 1; i < n + 1; i++) {
    for (let j = i + 1; j < n + 1; j++) {
      console.log([i, j]);
      if (i * j === totalSum - i - j) {
        return [
          [i, j],
          [j, i],
        ];
      }
    }
  }

  return [];
};

assert.deepEqual(removeNb(26), [
  [15, 21],
  [21, 15],
]);
assert.deepEqual(removeNb(100), []);
