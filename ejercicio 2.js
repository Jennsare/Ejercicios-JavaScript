//Crear una función que determine la nota final de un alumno, la cual depende de lo siguiente:  
//• Examen =20% 
//• tareas = 40% 
//• asistencia = 10% 
//• investigación = 30% 
//Al final deberá mostrar los datos del alumno, nombre, carnet y nota final.

function calcularNotaFinal(nombre, carnet, examen, tareas, asistencia, investigacion) {
    // Calcular la nota final con los porcentajes correspondientes
    let notaFinal = (examen * 0.20) + (tareas * 0.40) + (asistencia * 0.10) + (investigacion * 0.30);

    // Mostrar los datos del alumno y la nota final
    console.log(`Nombre: ${nombre}`);
    console.log(`Carnet: ${carnet}`);
    console.log(`Nota Final: ${notaFinal.toFixed(2)}`); // Redondear a 2 decimales
}

// Ejemplo de uso:
let nombreAlumno = "Jeniffer Saravia";
let carnetAlumno = "SE220355";
let examen = 95;
let tareas = 100;
let asistencia = 100;
let investigacion = 95;

calcularNotaFinal(nombreAlumno, carnetAlumno, examen, tareas, asistencia, investigacion);
