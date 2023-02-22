
miFuncion(4, 2);

// Una función es un código reutilizable al que podamos llamar tantas veces como necesitemos

miFuncion(4, 2);

// Declaración de la función: lleva el nombre en camel case y puede o no tener argumentos
function miFuncion(a, b) {
    console.log( "Suma: " + (a + b ))
}

// Llamado a la función = HOISTING (se la puede llamar antes de definirla o despues de definirla)
miFuncion(2, 3);

// La returninstrucción detiene la ejecución de una función y devuelve un valor.

miFuncion(4, 2);

function miFuncion(a, b) {
    console.log(arguments)
    return  a + b;
}

let resultado = miFuncion(2, 3);
console.log(resultado);

// Declaración de una función de tipo Expession
let sumar = function (a, b){return a + b};

resultado = sumar(1, 2);
console.log(resultado);

// Function Self Invoking. Puede ser util para cuando necesitemos una funcion que se llame a si misma cuando se cargue el sitio

(function (a, b){
    console.log('Ejecutando la función: ' + (a + b));
})(3, 4);
// Función como Objeto. Las funciones pueden tener propiedades y metodos
console.log(typeof miFuncion);


var miFuncionTexto = miFuncion.toString();
console.log(miFuncionTexto);


