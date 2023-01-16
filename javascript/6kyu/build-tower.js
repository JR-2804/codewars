const generateFloor = (numberOfFloors) => (floor) =>
  " ".repeat(numberOfFloors - floor - 1) +
  "*".repeat(floor + floor + 1) +
  " ".repeat(numberOfFloors - floor - 1);

const towerBuilder = (nFloors) =>
  [...Array(nFloors).keys()].map(generateFloor(nFloors));
