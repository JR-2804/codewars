// const findNb = (m) => {
//   let n = 0;
//   let result = 0;

//   while (result < m) {
//     n++;
//     result += Math.pow(n, 3);
//   }

//   return result === m ? n : -1;
// };

const findNb = (m, n = 1) => {
  const result = m - Math.pow(n, 3);

  if (result < 0) {
    return -1;
  }

  if (result === 0) {
    return n;
  }

  return findNb(result, n + 1);
};

assert.strictEqual(findNb(4183059834009), 2022);
assert.strictEqual(findNb(24723578342962), -1);
assert.strictEqual(findNb(135440716410000), 4824);
assert.strictEqual(findNb(40539911473216), 3568);
