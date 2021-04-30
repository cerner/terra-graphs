const createGraphValuesWithSin = (
  length, initialX, xModifier, yModifier,
) => {
  const values = new Array(length).fill('').map((_, i) => ({
    y: Math.sin(i) * yModifier,
    x: initialX + i * xModifier,
  }));

  return values;
};

const createGraphValuesWithCos = (
  length, initialX, xModifier, yModifier,
) => {
  const values = new Array(length).fill('').map((_, i) => ({
    y: Math.cos(i) * yModifier,
    x: initialX + i * xModifier,
  }));

  return values;
};

export {
  createGraphValuesWithSin,
  createGraphValuesWithCos,
};
