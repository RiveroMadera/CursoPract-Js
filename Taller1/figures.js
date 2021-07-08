// square
console.group('squares');
function squarePerimeter(side) {
  return side > 0 ? side * 4 :  'write a correct value';
}

function squareArea(side) {
  return side > 0 ? side * side :  'write a correct value';
}
console.groupEnd();

// triangle with arrow functions
console.group('Triangle');
const trianglePerimeter = (sideA, sideB, base) => sideA + sideB + base;
const triangleArea = (base, height) => (base * height) / 2;

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


// Interaction with HTML

function calculateSquarePerimeter() {
  const input = document.getElementById('squareInput');
  const value = input.value;

  const perimeter = squarePerimeter(value)
  alert(perimeter);
};

function calculateSquareArea() {
  const input = document.getElementById('squareInput');
  const value = input.value;

  const area = squareArea(value)
  alert(area);
};

//imprimir el perimetro del triangulo
function calcularPerimetroTriangulo() {
  const inputLado1 = parseFloat(
    document.getElementById("InputTrianguloLado1").value
  );
  const inputLado2 = parseFloat(
    document.getElementById("InputTrianguloLado2").value
  );
  const inputBase = parseFloat(
    document.getElementById("InputTrianguloBase").value
  );
  const perimetro = perimetroTriangulo(inputLado1, inputLado2, inputBase);
  alert(perimetro);
}

//definir el tipo de triangulo y calcular su area
function definirTipoTriangulo() {
  const inputLado1 = parseFloat(
    document.getElementById("InputTrianguloLado1").value
  );
  const inputLado2 = parseFloat(
    document.getElementById("InputTrianguloLado2").value
  );
  const inputBase = parseFloat(
    document.getElementById("InputTrianguloBase").value
  );
  if (inputLado1 == inputLado2 && inputLado1 != inputBase) {
    //triangulo isosceles
    const altura = calcularAlturaTriangulo(inputLado1, inputBase);
    const area = areaTrianguloIsosceles(inputBase, altura);
    alert(area);
  } else if (inputLado1 == inputLado2 && inputLado1 == inputBase) {
    //triangulo equilatero
    const area = areaTrianguloEquilatero(inputBase);
    alert(area);
  } else {
    alert(`Los lados del triángulo deben ser iguales`);
  }
}

//calcular altura del triangulo isosceles
function calcularAlturaTriangulo(lado, base) {
  const baseReal = base / 2;
  //l^2 = b^2 + a^2
  //l^2 - b^2 = a^2
  //sqr(l^2 - b^2) = a
  const altura = Math.sqrt(Math.pow(lado, 2) - Math.pow(baseReal, 2));
  return altura;
}

//imprimir el perimetro de un circulo
function calcularPerimetroCirculo() {
  const inputRadio = parseFloat(document.getElementById("InputCiculo").value);
  const perimetro = perimetroCirculo(inputRadio);
  alert(perimetro);
}

//imprimir el perimetro de un circulo
function calcularAreaCirculo() {
  const inputRadio = parseFloat(document.getElementById("InputCiculo").value);
  const area = areaCirculo(inputRadio);
  alert(area);
}