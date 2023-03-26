let miFuncion = function(){
    console.log('Saludos desde mi funcion');
}

//const miFuncionFlecha = () => {}  podria llamar a la funcion con CONST
let miFuncionFlecha = () =>{ // en functions Arrow dosen't apply Arrow Concept al usar Let se convierte en Objeto
    console.log('saludos desde mi funcion FLECHA');
}

miFuncionFlecha();

// Funcion Clasica
//function miFuncion(){
    //console.log('Saludos desde mi funcion');
//}

// miFuncion(); // por hoisting podria ir al inicio

// Las funciones Flechas son sin nombre y van a ser anonimas.