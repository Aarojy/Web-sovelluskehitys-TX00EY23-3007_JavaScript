const celsius = Number(prompt('Enter a celsius value: '));
const kelvin = celsius + 273.15;
const fahrenheit = (celsius * 9) / 5 + 32;

document.querySelector('#Celsius').innerHTML += ' ' + celsius;
document.querySelector('#Fahrenheit').innerHTML += ' ' + fahrenheit;
document.querySelector('#Kelvin').innerHTML += ' ' + kelvin;
