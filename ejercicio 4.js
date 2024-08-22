//Crear una función que en base a 2 números enteros que ingrese el usuario, calcular cual número es el mayor y devolverlo.  

function encontrarMayor(num1, num2) {
    // Comparar los números y devolver el mayor
    if (num1 > num2) {
        return num1;
    } else if (num2 > num1) {
        return num2;
    } else {
        return "Ambos números son iguales.";
    }
}

// Ejemplo de uso:
let numero1 = 50;
let numero2 = 40;

let mayor = encontrarMayor(numero1, numero2);
console.log(`El número mayor es: ${mayor}`);
