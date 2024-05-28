"use strict";

// Definimos un array con las opciones del juego.
const opciones = ['piedra', 'papel', 'tijera', 'lagarto', 'spock'];

// Función que genera una opción aleatoria del juego.
function generarOpcionAleatoria() {
    // Generamos un índice aleatorio dentro del rango de opciones.
    const indice = Math.floor(Math.random() * opciones.length);
    // Devolvemos la opción correspondiente al índice aleatorio.
    return opciones[indice];
}
