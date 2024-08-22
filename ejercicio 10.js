//Se cuenta con la siguiente información:  
//Las edades de 5 estudiantes del turno mañana.  
// Las edades de 6 estudiantes del turno tarde.  
//Las edades de 11 estudiantes del turno noche.  
//Nota: Las edades de cada estudiante se deberán ingresar por la web.  
//Lo que queremos devolver: 
//Obtener el promedio de las edades de cada turno (tres promedios). 
//Imprimir dichos promedios (promedio de cada turno). 
//Mostrar por pantalla un mensaje que indique cuál de los tres turnos tiene un promedio de edades mayor.

// Función para calcular el promedio de un array de números
function calcularPromedio(edades) {
    const suma = edades.reduce((total, edad) => total + edad, 0);
    return suma / edades.length;
}

// Función para solicitar las edades de los estudiantes de un turno específico
function solicitarEdades(turno, cantidad) {
    let edades = [];
    for (let i = 0; i < cantidad; i++) {
        const edad = parseInt(prompt(`Ingrese la edad del estudiante ${i + 1} del turno ${turno}:`), 10);
        edades.push(edad);
    }
    return edades;
}

// Solicitar edades para cada turno
const edadesManana = solicitarEdades("mañana", 5);
const edadesTarde = solicitarEdades("tarde", 6);
const edadesNoche = solicitarEdades("noche", 11);

// Calcular los promedios de cada turno
const promedioManana = calcularPromedio(edadesManana);
const promedioTarde = calcularPromedio(edadesTarde);
const promedioNoche = calcularPromedio(edadesNoche);

// Imprimir los promedios de cada turno
console.log(`Promedio de edades del turno mañana: ${promedioManana.toFixed(2)}`);
console.log(`Promedio de edades del turno tarde: ${promedioTarde.toFixed(2)}`);
console.log(`Promedio de edades del turno noche: ${promedioNoche.toFixed(2)}`);

// Determinar y mostrar el turno con el promedio de edades mayor
if (promedioManana > promedioTarde && promedioManana > promedioNoche) {
    console.log("El turno mañana tiene el promedio de edades mayor.");
} else if (promedioTarde > promedioManana && promedioTarde > promedioNoche) {
    console.log("El turno tarde tiene el promedio de edades mayor.");
} else if (promedioNoche > promedioManana && promedioNoche > promedioTarde) {
    console.log("El turno noche tiene el promedio de edades mayor.");
} else {
    console.log("Dos o más turnos tienen el mismo promedio de edades mayor.");
}
 