// Square Code
// const squareSide = 5;
// console.log(`the sides of the square measures: ${squareSide} cm`);

// const squarePerimeter = squareSide * 4;
// console.log(`the perimeter of the square measures: ${squarePerimeter} cm`);

// const squareArea = squareSide * squareSide;
// console.log(`the area of the square measures: ${squareSide} cm`);

console.group('squares');
function squarePerimeter(side) {
  return side * 4;
}

function squareArea(side) {
  return side * side;
}
console.groupEnd();