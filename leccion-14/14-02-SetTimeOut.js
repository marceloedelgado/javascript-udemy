// El Objtivo de las funciones Callback es para poder ejecutar procesos
// de manera Asincróna (Sincronos: ejecuta 1 linea a la vez)

function miFuncion1(){
    console.log('Mi Funcion 1');
}

function miFuncion2 () {
    console.log('funcion 2');
    
}

miFuncion2();
miFuncion1();

// Funciones de tipo Callback

let imp = function imprimir(mensaje){
    console.log(mensaje);
}

function sumar(op1, op2, funcionCallback){
    let resultado = op1 +   op2;
    funcionCallback(`Resultado: ${resultado}`);

}

sumar(5, 3, imp);

// Llamadas Asíncronas con eel uso de setTimeout

function mifuncionCallBack(){
    console.log('Saludo Asincrono despues de 3 segundos');
}

setTimeout(mifuncionCallBack, 3000);

setTimeout(function(){ console.log('saludo asincrono 2')}, 5000);

// utilzando funciones flecha

setTimeout( () => console.log('Saludo asincrono 3'), 1000);