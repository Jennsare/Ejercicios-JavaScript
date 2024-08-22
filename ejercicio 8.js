// Escriba un programa que muestre la tabla de multiplicar del 1 al 10 del número ingresado por el usuario. 

// Solicitar al usuario que ingrese un número
const numero = parseInt(prompt("Ingrese un número para ver su tabla de multiplicar:"), 10);

// Verificar que el valor ingresado es un número válido
if (isNaN(numero)) {
    console.log("Por favor, ingrese un número válido.");
} else {
    console.log(`Tabla de multiplicar del ${numero}:`);

    // Generar y mostrar la tabla de multiplicar del 1 al 10
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}
