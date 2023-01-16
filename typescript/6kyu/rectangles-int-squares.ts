const sqInRect = (
  x: number,
  y: number,
  array: number[] = [],
): null | number[] => {
  if (x === 1 && y === 1) {
    return [...array, 1];
  }

  if (x === y) {
    return array.length === 0 ? null : [...array, x];
  }

  if (x < y) {
    return sqInRect(x, y - x, [...array, x]);
  }

  return sqInRect(x - y, y, [...array, y]);
};

export { sqInRect };
