const userInt = Number(prompt('Enter an integer: '));

let sum = 0;
for (let i = 1; i <= userInt; i++) {
  sum += i;
}

document.querySelector('#Sum').innerHTML += ' ' + sum;
