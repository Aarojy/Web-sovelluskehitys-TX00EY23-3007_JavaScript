const numbers = [];

let done = false;
while (!done) {
  newNumber = prompt('Enter a number (or "done" to finish): ');
  if (newNumber === 'done') {
    done = true;
  } else {
    numbers.push(Number(newNumber));
  }
}

var foundEvens = false;
for (const number of numbers) {
  if (number % 2 === 0) {
    document.querySelector('#Evens').innerHTML += ' ' + number + ',';
    foundEvens = true;
  }
}

if (!foundEvens) {
  document.querySelector('#Evens').innerHTML += ' None';
}

alert('Check the page for the result!');
