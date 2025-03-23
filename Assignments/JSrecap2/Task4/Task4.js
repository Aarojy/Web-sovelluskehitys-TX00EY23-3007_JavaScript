const Numbers = [34, 642, 12367, 62, 2, 7123, -1, 87];

function sortNumbers(arr) {
  return arr.slice().sort((a, b) => a - b);
}

const sortedNumbers = sortNumbers(Numbers);

console.log('Original array: ' + Numbers);
console.log('Sorted array: ' + sortedNumbers);
