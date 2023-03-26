let miFuncion = function(){
    console.log('Saludos desde mi funcion');
}

// const miFuncionFlecha = () => console.log('Saludos desde mi funcion FLECHA');
// miFuncionFlecha();

// const saludar = () => {
//     return 'saludos deesde funcion flecha';

// } 

const saludar = () => 'Saludos desde funcion Flecha';

console.log(saludar());

const regresaObjeto = () => ({ nombre: 'Juan', apellido: 'Lara'});
console.log( regresaObjeto());



// Codigo clasico dee la funcion flecha superior

const funcionParametrosClasico = function (mensaje){
    console.log(mensaje);
}

// const funcionConParametros = (mensaje) => console.log( mensaje);
const funcionConParametros = mensaje=> console.log( mensaje); // Omitir parentesis al llamar a la funcion
funcionConParametros('saludos con parametros');


// const funcionConVariosParametros = (op1, op2) => op1 + op2;


const funcionConVariosParametros = (op1, op2) => {
    let resultado = op1 + op2;
    return `Resultado: ${resultado}`; // template string

};
console.log(funcionConVariosParametros(3, 5));