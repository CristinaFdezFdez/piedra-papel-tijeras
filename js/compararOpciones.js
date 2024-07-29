"use strict";

// Función que compara las opciones elegidas por el usuario y la computadora.
function compararOpciones(opcionUsuario, opcionComputadora) {
    if (opcionUsuario === opcionComputadora) {
        return 'Habéis empatado';
    } else if (
        (opcionUsuario === 'piedra' && (opcionComputadora === 'tijera' || opcionComputadora === 'lagarto')) ||
        (opcionUsuario === 'papel' && (opcionComputadora === 'piedra' || opcionComputadora === 'spock')) ||
        (opcionUsuario === 'tijera' && (opcionComputadora === 'papel' || opcionComputadora === 'lagarto')) ||
        (opcionUsuario === 'lagarto' && (opcionComputadora === 'papel' || opcionComputadora === 'spock')) ||
        (opcionUsuario === 'spock' && (opcionComputadora === 'piedra' || opcionComputadora === 'tijera'))
    ) {
        return '¡Has ganado!';
    } else {
        return 'Has perdido';
    }
}