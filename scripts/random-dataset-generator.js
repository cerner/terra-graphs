function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}

let str = '';
const values = [];

const pointsCount = 15;

const xMin = 100;
const xMax = 230;

const yMin = -10;
const yMax = 60;

for (let i = 0; i < pointsCount; i++) {
  values.push({ x: getRandomIntInclusive(xMin, xMax), y: getRandomIntInclusive(yMin, yMax) });
}

const sort = true;

if (sort) {
  values.sort((a, b) => a.x - b.x);
}

values.forEach(value => str += `{x: ${value.x}, y: ${value.y} },\n`);

console.log(str);
