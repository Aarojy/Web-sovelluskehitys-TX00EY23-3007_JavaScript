const point1x = Number(prompt("Enter point 1's x-coordinate: "));
const point1y = Number(prompt("Enter point 1's y-coordinate: "));
const point2x = Number(prompt("Enter point 2's x-coordinate: "));
const point2y = Number(prompt("Enter point 2's y-coordinate: "));

const distance = Math.sqrt(
  Math.pow(point2x - point1x, 2) + Math.pow(point2y - point1y, 2)
);

document.querySelector('#Distance').innerHTML =
  'Distance between points: (' +
  point1x +
  ', ' +
  point1y +
  ') and (' +
  point2x +
  ', ' +
  point2y +
  ') is ' +
  distance;
