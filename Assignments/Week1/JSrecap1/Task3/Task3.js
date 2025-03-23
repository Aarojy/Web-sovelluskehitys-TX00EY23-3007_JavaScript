const triangleSideA = Number(
  prompt('Enter lenght of the first side of the triangle: ')
);
const triangleSideB = Number(
  prompt('Enter lenght of the second side of the triangle: ')
);
const triangleSideC = Number(
  prompt('Enter lenght of the third side of the triangle: ')
);

if (triangleSideA === triangleSideB && triangleSideB === triangleSideC) {
  document.querySelector('#Triangle').innerHTML += ' an equilateral';
} else if (
  triangleSideA === triangleSideB ||
  triangleSideB === triangleSideC ||
  triangleSideA === triangleSideC
) {
  document.querySelector('#Triangle').innerHTML += ' an sosceles';
} else {
  document.querySelector('#Triangle').innerHTML += ' a scalene';
}
