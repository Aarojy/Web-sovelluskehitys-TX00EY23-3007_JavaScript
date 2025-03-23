const userInt = Number(prompt('Enter an integer: '));
const table = document.querySelector('#Table');

for (let i = 1; i <= userInt; i++) {
  let newRow = table.insertRow();
  for (let j = 1; j <= userInt; j++) {
    let newCell = newRow.insertCell();
    newCell.innerHTML = i * j;
    newCell.style.border = '1px solid black';
    newCell.style.padding = '2px';
  }
}
