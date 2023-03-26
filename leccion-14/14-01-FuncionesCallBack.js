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