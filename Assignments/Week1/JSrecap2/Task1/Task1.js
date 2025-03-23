const fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi'];

console.log('Fruits ' + fruits);
console.log('Lenght of fruits: ' + fruits.length);
console.log('Element at Index 2: ' + fruits[2]);
console.log('Last Element of Fruits: ' + fruits[fruits.length - 1]);

let vegetables = [];

let i = 0;
while (i < 3) {
  const newVegetable = prompt('Enter a vegetable: ');
  vegetables.push(newVegetable);
  i++;
}

console.log('Vegetables: ' + vegetables);
console.log('Lenght of fruits: ' + vegetables.length);
