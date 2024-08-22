//Calcular el aumento de trabajador tomando en cuenta la tabla de categorías de aumento. Para este ejercicio deberá de asignar las siguientes variables: nombre, salario, categoría y aumento. Deberá demostrar los datos del empleado y el aumento salarial.
function calcularAumento(nombre, salario, categoria) {
    let aumento = 0;

    // Determinar el aumento basado en la categoría
    switch(categoria) {
        case 'A':
            aumento = 0.15;
            break;
        case 'B':
            aumento = 0.30;
            break;
        case 'C':
            aumento = 0.10;
            break;
        case 'D':
            aumento = 0.20;
            break;
        default:
            console.log("Categoría no válida");
            return;
    }

    // Calcular el aumento salarial
    let aumentoSalarial = salario * aumento;
    let nuevoSalario = salario + aumentoSalarial;

    // Mostrar los datos del empleado y el aumento salarial
    console.log(`Nombre: ${nombre}`);
    console.log(`Salario Actual: $${salario.toFixed(2)}`);
    console.log(`Categoría: ${categoria}`);
    console.log(`Aumento Salarial: $${aumentoSalarial.toFixed(2)}`);
    console.log(`Nuevo Salario: $${nuevoSalario.toFixed(2)}`);
}

// Ejemplo de uso:
let nombreEmpleado = "Jeniffer Saravia";
let salarioEmpleado = 1400;
let categoriaEmpleado = "B";

calcularAumento(nombreEmpleado, salarioEmpleado, categoriaEmpleado);
