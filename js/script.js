"use strict";

// Capturamos los elementos del HTML.
const piedra = document.getElementById("piedra");
const papel = document.getElementById("papel");
const tijera = document.getElementById("tijera");
const lagarto = document.getElementById("lagarto");
const spock = document.getElementById("spock");
const salida = document.getElementById("salida");

// Agregamos un event listener para cuando el usuario elige 'piedra'.
piedra.addEventListener('click', function() {
    const opcionUsuario = 'piedra';
    const opcionComputadora = generarOpcionAleatoria();
    const resultadoJuego = compararOpciones(opcionUsuario, opcionComputadora);
    salida.innerHTML = `Has elegido ${opcionUsuario}, tu oponente ha elegido ${opcionComputadora}. ${resultadoJuego}.`;
});

// Event listener para 'papel'.
papel.addEventListener('click', function() {
    const opcionUsuario = 'papel';
    const opcionComputadora = generarOpcionAleatoria();
    const resultadoJuego = compararOpciones(opcionUsuario, opcionComputadora);
    salida.innerHTML = `Has elegido ${opcionUsuario}, tu oponente ha elegido ${opcionComputadora}. ${resultadoJuego}.`;
});

// Event listener para 'tijera'.
tijera.addEventListener('click', function() {
    const opcionUsuario = 'tijera';
    const opcionComputadora = generarOpcionAleatoria();
    const resultadoJuego = compararOpciones(opcionUsuario, opcionComputadora);
    salida.innerHTML = `Has elegido ${opcionUsuario}, tu oponente ha elegido ${opcionComputadora}. ${resultadoJuego}.`;
});

// Event listener para 'lagarto'.
lagarto.addEventListener('click', function() {
    const opcionUsuario = 'lagarto';
    const opcionComputadora = generarOpcionAleatoria();
    const resultadoJuego = compararOpciones(opcionUsuario, opcionComputadora);
    salida.innerHTML = `Has elegido ${opcionUsuario}, tu oponente ha elegido ${opcionComputadora}. ${resultadoJuego}.`;
});

// Event listener para 'spock'.
spock.addEventListener('click', function() {
    const opcionUsuario = 'spock';
    const opcionComputadora = generarOpcionAleatoria();
    const resultadoJuego = compararOpciones(opcionUsuario, opcionComputadora);
    salida.innerHTML = `Has elegido ${opcionUsuario}, tu oponente ha elegido ${opcionComputadora}. ${resultadoJuego}.`;
});
