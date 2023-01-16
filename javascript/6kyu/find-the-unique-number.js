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
