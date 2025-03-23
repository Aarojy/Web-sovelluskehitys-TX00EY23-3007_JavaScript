const score = Number(prompt('Enter your score (0-100): '));
let grade = '';

switch (true) {
  case score > 100 || score < 0:
    grade = 'Invalid score';
    break;
  case score < 40:
    grade = '0';
    break;
  case score < 52:
    grade = '1';
    break;
  case score < 64:
    grade = '2';
    break;
  case score < 76:
    grade = '3';
    break;
  case score < 88:
    grade = '4';
    break;
  case score <= 100:
    grade = '5';
    break;
}

document.querySelector('#Grade').innerHTML += ' ' + grade;
