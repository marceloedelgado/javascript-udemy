// Cuano trabajamos con Clases no se aplica 
// el  concepto de Hoisting, entonces primero
// hay que definir la clase para poder utilizarla

// No ees posible crear Objetos antes de crear la clase
// No se aplica el concepto de Hoisting
// let persona2 =  new Object('Karla', 'Juarez');

class Persona {
    constructor(nombre, apellido){
    this._nombre = nombre;
    this._apellido = apellido;

    }

    get nombre(){
        return this._nombre;

    }

    set nombre(nombre){
        this._nombre = nombre;
       
    }

    get apellido(){
        return this._apellido;
    }

    set apellido(apellido){
        this._apellido = apellido;
    }
}

let persona1 = new Persona('Juan', 'Perez');
persona1.nombre = 'Juan Carlos'; // llama indirecta a set nombre('Juan Carlos')
persona1.apellido = 'Amarilla'; // set apellido
console.log( persona1.nombre);// llama a get nombre
console.log(persona1.apellido);

// Una vez definia la Clase se puede crear el Objeto

let persona2 = new Persona('Karla', 'Juarez');
console.log(persona2);