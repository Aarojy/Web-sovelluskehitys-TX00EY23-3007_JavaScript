const numbers = [];

let i = 0;
while (i < 5) {
  const newNumber = prompt('(' + (i + 1) + '/5) Enter a number: ');
  numbers.push(newNumber);
  i++;
}

console.log('Numbers: ' + numbers);

const checkedNumber = prompt('Enter a number to check if it is in the list: ');

if (numbers.includes(checkedNumber)) {
  console.log('The number ' + checkedNumber + ' is in the list.');
} else {
  console.log('The number ' + checkedNumber + ' is not in the list.');
}

numbers.pop();

console.log('Updated numbers: ' + numbers);

numbers.sort((a, b) => a - b);

console.log('Sorted numbers: ' + numbers);
