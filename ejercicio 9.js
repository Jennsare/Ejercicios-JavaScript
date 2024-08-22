//Crear programa donde se introduce una temperatura en Celsius y salga el resultado en Fahrenheit, una vez teniendo la temperatura en Fahrenheit deberá devolver lo siguiente: 
// Si ºF está entre 14 y 32, sale la frase “Temperatura baja” 
//Si ºF está entre 32 y 68, sale la frase “Temperatura adecuada” 
//Si ºF está entre 68 y 96, sale la frase “Temperatura alta” 
//Si no está entre ningún caso anterior la frase “Temperatura desconocida”

// Solicitar al usuario que ingrese la temperatura en Celsius
const temperaturaCelsius = parseFloat(prompt("Ingrese la temperatura en grados Celsius:"));

// Convertir Celsius a Fahrenheit
const temperaturaFahrenheit = (temperaturaCelsius * 9/5) + 32;

// Mostrar la temperatura en Fahrenheit
console.log(`La temperatura en Fahrenheit es: ${temperaturaFahrenheit.toFixed(2)}°F`);

// Determinar y mostrar el mensaje basado en el rango de la temperatura
if (temperaturaFahrenheit >= 14 && temperaturaFahrenheit < 32) {
    console.log("Temperatura baja");
} else if (temperaturaFahrenheit >= 32 && temperaturaFahrenheit < 68) {
    console.log("Temperatura adecuada");
} else if (temperaturaFahrenheit >= 68 && temperaturaFahrenheit < 96) {
    console.log("Temperatura alta");
} else {
    console.log("Temperatura desconocida");
}
