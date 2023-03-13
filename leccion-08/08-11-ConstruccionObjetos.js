// Reutilizar función Constructor
function Persona(nombre, apellido, email){
    this.nombre  = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function() {
        return this.nombre + ' ' + this.apellido;
    }
}


// Accedemos al atributo nombreCompleto del Padre
let padre = new Persona('Juan', 'Perez', 'jperez@gmail.com');
console.log( padre.nombreCompleto() );

let madre = new Persona('Laura', 'Quintero', 'lquintero@gmail.com');
console.log( madre.nombreCompleto() );

let hijo = new Persona('Omar', 'Perez Quintero', 'operezquintero@gmail.com');
console.log ( hijo.nombreCompleto() );

// Constructor de Objetos mediante función Constructor

let miObjeto = new Object(); // Opci'on mmás Formal pero No recomendable

// La buena práctica es la forma simplificada para crear Objetos

let miObjeto2 = {};

let miCadena1 = new String(); // Función Constructor de tipo String
let miCadena2 = 'Hola'; // Constructor simplificada

let miNumero = new Number(1); // Opción Formal pero no recomendable;
let miNumero2 = 1;

let miBoolean = new Boolean();
let miBoolean2 = false; // Opción más recomendable

let miArreglo1 = new Array();
let miArreglo2 = []; // Opción más recomendable.

let miFuncion = new Function();
let miFuncion2 = function(){}; // Opción simplificada creación de Función







