// Crear una Función para calcular el descuento en viajes turísticos tomando en cuenta lo siguiente:  
//Si el usuario introduce como origen la ciudad de Palma y como destino La costa del Sol, el descuento será de 5%, si el destino es Panchimalco el descuento será del 10% y si el destino es Puerto el Triunfo el descuento será del 15%.
function calcularDescuento(origen, destino, precio) {
    let descuento = 0;

    if (origen.toLowerCase() === "palma") {
        if (destino.toLowerCase() === "la costa del sol") {
            descuento = 0.05; // 5% de descuento
        } else if (destino.toLowerCase() === "panchimalco") {
            descuento = 0.10; // 10% de descuento
        } else if (destino.toLowerCase() === "puerto el triunfo") {
            descuento = 0.15; // 15% de descuento
        }
    }

    const descuentoAplicado = precio * descuento;
    const precioFinal = precio - descuentoAplicado;

    return {
        descuento: descuento * 100, // Descuento en porcentaje
        descuentoAplicado: descuentoAplicado.toFixed(2),
        precioFinal: precioFinal.toFixed(2)
    };
}

// Ejemplo de uso:
const origen = "Palma";
const destino = "Puerto el triunfo";
const precio = 2000;

const resultado = calcularDescuento(origen, destino, precio);
console.log(`Descuento aplicado: ${resultado.descuento}%`);
console.log(`Monto del descuento: $${resultado.descuentoAplicado}`);
console.log(`Precio final: $${resultado.precioFinal}`);

