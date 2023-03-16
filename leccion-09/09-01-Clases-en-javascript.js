// Una clase de JavaScript es un tipo de función. Las clases se declaran con la palabra clave class 
// Un objeto es una instancia de una clase
// Clase Persona engloba al Objeto Karla y Armnano
// Una clase es una plantilla para crear instancias (objects)

// Una clase (Plantilla) tiene UN NOMBRE / ATRIBUTOS Y MÑETODOS


class Persona {
    constructor(nombre, apellido){
    this.nombre = nombre;
    this.apellido = apellido;

    }
}

let persona1 = new Persona('Juan', 'Perez');
console.log(persona1);

let persona2 = new Persona('Carlos', 'Lara');
console.log( persona2 );
