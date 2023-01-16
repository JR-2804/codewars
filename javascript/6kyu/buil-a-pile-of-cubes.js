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
