// Triangle Code

const sideA = 6;
const sideB = 6;
const base = 4;
const height = 5.5;

console.group('Triangle');
console.log(
  `The sides of the triangle:
  side A: ${sideA} cm,
  side B: ${sideB} cm,
  base: ${base} cm`
  );
  console.log(`the height of the triangle: ${height} cm`);

const perimeter = sideA + sideB + base;
console.log(`the perimeter of triangle: ${perimeter} cm`);

const area = (base * height) / 2;
console.log(`the area of triangle: ${area} cm `);

console.groupEnd();
