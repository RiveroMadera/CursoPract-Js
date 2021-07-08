// square
console.group('squares');
function squarePerimeter(side) {
  return side * 4;
}

function squareArea(side) {
  return side * side;
}
console.groupEnd();

// triangle 
console.group('Triangle');
function trianglePerimeter(sideA, sideB, base) {
  return sideA + sideB + base;
};

function triangleArea(base, height) {
  return (base * height) / 2;
};
console.groupEnd();

// circle
console.group(Circle);
const PI = Math.PI;

function circleDiameter(radius) {
  return radius * 2;
};

function circumference(radius) {
  const diameter = circleDiameter(radius);
  return diameter * PI;
};

function circleArea(radius) {
  return (radius * radius) * PI;
};
console.groupEnd();
