"use strict";

// Capturamos los elementos del HTML.
const botones = {
    piedra: document.getElementById("piedra"),
    papel: document.getElementById("papel"),
    tijera: document.getElementById("tijera"),
    lagarto: document.getElementById("lagarto"),
    spock: document.getElementById("spock")
};
const salida = document.getElementById("salida");

// Función que maneja el clic en cualquier botón.
function manejarClick(opcionUsuario) {
    const opcionComputadora = generarOpcionAleatoria();
    const resultadoJuego = compararOpciones(opcionUsuario, opcionComputadora);
    salida.innerHTML = `Has elegido ${opcionUsuario}, tu oponente ha elegido ${opcionComputadora}. ${resultadoJuego}.`;

    // Limpiar animaciones anteriores
    salida.classList.remove('win-animation', 'loss-animation');
    
    // Añadir animación según el resultado
    if (resultadoJuego === '¡Has ganado!') {
        salida.classList.add('win-animation');
    } else if (resultadoJuego === 'Has perdido') {
        salida.classList.add('loss-animation');
    }
}

// Agregamos un event listener para cada botón.
Object.keys(botones).forEach(opcion => {
    botones[opcion].addEventListener('click', () => manejarClick(opcion));
});

// Función para iniciar el juego al hacer clic en el botón de inicio.
document.getElementById('start-game').addEventListener('click', () => {
    document.getElementById('welcome').style.display = 'none';
    document.getElementById('game').style.display = 'flex';
});
