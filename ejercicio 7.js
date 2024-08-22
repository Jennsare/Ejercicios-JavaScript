// Se realiza la carga de 10 valores enteros por teclado. Se desea conocer:  
//La cantidad de valores negativos ingresados. 
//La cantidad de valores positivos ingresados. 
//La cantidad de múltiplos de 15. 
//El valor acumulado de los números ingresados que son pares. 

// Inicialización de variables
let negativos = 0;
let positivos = 0;
let multiplosDe15 = 0;
let sumaPares = 0;

// Carga de 10 valores enteros
for (let i = 0; i < 10; i++) {
    const numero = parseInt(prompt(`Ingrese el valor ${i + 1}:`), 10);

    // Verificar si es negativo o positivo
    if (numero < 0) {
        negativos++;
    } else if (numero > 0) {
        positivos++;
    }

    // Verificar si es múltiplo de 15
    if (numero % 15 === 0) {
        multiplosDe15++;
    }

    // Acumular si es par
    if (numero % 2 === 0) {
        sumaPares += numero;
    }
}

// Mostrar los resultados
console.log(`Cantidad de valores negativos: ${negativos}`);
console.log(`Cantidad de valores positivos: ${positivos}`);
console.log(`Cantidad de múltiplos de 15: ${multiplosDe15}`);
console.log(`Valor acumulado de los números pares: ${sumaPares}`);
