/* 
Ejemplos de tpos de datos con Javascript
*/

// Tipo de Dato string
var nombre = "Marcelo Delgado";
console.log(typeof nombre);

nombre = 10.5;
console.log(typeof nombre);

// Tipo de Dato Numérico
var numero = 1000;
console.log(numero);

//Tipo de Dato object
var objeto = {
    nombre : "Juan",
    apellido : "Perez",
    telefono :  "554433830",
    edad : "43 "
}
console.log( objeto);

//Tipo de Dato boolean (true, false)
var bandera = false;
console.log(typeof bandera);

// Tipo de Dato function
function miFuncion(){}
console.log(miFuncion);

//Tipo de Dato Symbol
var simbolo =Symbol('mi simbolo');
console.log(simbolo);

//Tipo clase es una function
class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
console.log(typeof Persona);

//Tipo undefined
var x;
console.log(typeof x);

x = undefined;
console.log(typeof x)

//null = ausencia de valor
var y = null;
console.log(typeof y);

//Arrays / Los arreglos Arrays en Javascript son Object
var autos = ['BMW', 'Audi', 'Volvo'];
console.log(autos);
console.log(typeof autos);

var z = '';
console.log(z);
console.log(typeof z);





