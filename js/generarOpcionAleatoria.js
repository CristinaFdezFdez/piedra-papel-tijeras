// Definimos un array con las opciones del juego.
const opciones = ['piedra', 'papel', 'tijera', 'lagarto', 'spock'];
// Función que genera una opción aleatoria del juego.
function generarOpcionAleatoria() {
    const indice = Math.floor(Math.random() * opciones.length);
    return opciones[indice];
}

