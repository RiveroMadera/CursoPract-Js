// circle code

console.group(Circle);

const radius = 4;
console.log(`radius: ${radius} cm`);

const diameter = radius * 2;
console.log(`diameter: ${diameter} cm`);
//const pi = 3.1415;
const PI = Math.PI;
console.log(`PI: ${PI} cm`);

const circumference = diameter * PI;
console.log(`circumference ${circumference}`);

const area = (radius * radius) * PI;
console.log(`area: ${area}`);

console.groupEnd();