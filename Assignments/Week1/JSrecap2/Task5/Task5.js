const Numbers = [34, 642, 12367, 62, 2, 7123, -1, 87];
const moreNumbers = [123, 521, -654, 0];

function sortNumbers(arr, sortType = 'asc') {
  if (sortType === 'asc') {
    return arr.slice().sort((a, b) => a - b);
  } else if (sortType === 'desc') {
    return arr.slice().sort((a, b) => b - a);
  }
  return 'Invalid sort type';
}

const sortedNumbers = sortNumbers(Numbers);
const sortedNumbersDesc = sortNumbers(Numbers, 'desc');

console.log('First original array: ' + Numbers);
console.log('First sorted array in ascending order: ' + sortedNumbers);
console.log('First sorted array in descending order: ' + sortedNumbersDesc);
console.log('-----------------------------------------------');

const moreSortedNumbers = sortNumbers(moreNumbers, 'asc');
const moreSortedNumbersDesc = sortNumbers(moreNumbers, 'desc');

console.log('Second original array: ' + moreNumbers);
console.log('Second sorted array in ascending order: ' + moreSortedNumbers);
console.log(
  'Second sorted array in descending order: ' + moreSortedNumbersDesc
);
