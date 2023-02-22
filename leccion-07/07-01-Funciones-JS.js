// Una función es un código reutilizable al que podamos llamar tantas veces como necesitemos

miFuncion(4, 2);

// Declaración de la función: lleva el nombre en camel case y puede o no tener argumentos
function miFuncion(a, b) {
    console.log( "Suma: " + (a + b ))
}

// Llamado a la función = HOISTING (se la puede llamar antes de definirla o despues de definirla)
miFuncion(2, 3);