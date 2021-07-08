// circle code

// const radius = 4;
// console.log(`radius: ${radius} cm`);

// const diameter = radius * 2;
// console.log(`diameter: ${diameter} cm`);
// //const pi = 3.1415;
// const PI = Math.PI;
// console.log(`PI: ${PI} cm`);

// const circumference = diameter * PI;
// console.log(`circumference ${circumference}`);

// const area = (radius * radius) * PI;
// console.log(`area: ${area}`);

console.group(Circle);

const PI = Math.PI;

function circleDiameter(radius) {
  return radius * 2;
};

function circumference(radius) {
  const diameter = circleDiameter(radius);
  return diameter * PI;
}

function circleArea(radius) {
  return (radius * radius) * PI;
}
console.groupEnd();
