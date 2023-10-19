// Ejercicio1
var numero1 = parseFloat(prompt("Ingresa el primer número:"));
var numero2 = parseFloat(prompt("Ingresa el segundo número:"));
var suma = numero1 + numero2;
var resta = numero1 - numero2;
var multiplicacion = numero1 * numero2;
var division = numero1 / numero2;
console.log("Suma: " + suma);
console.log("Resta: " + resta);
console.log("Multiplicación: " + multiplicacion);
console.log("División: " + division);
// Ejercicio2
var nombre = prompt("Ingresa tu nombre:");
var apellido = prompt("Ingresa tu apellido:");
var nombreCompleto = nombre + " " + apellido;
console.log("Nombre completo: " + nombreCompleto);
// Ejercicio3
var gradosCelsius = parseFloat(prompt("Ingresa los grados en Celsius:"));
var gradosFahrenheit = (gradosCelsius * 9/5) + 32;
console.log("Grados Celsius: " + gradosCelsius);
console.log("Grados Fahrenheit: " + gradosFahrenheit);