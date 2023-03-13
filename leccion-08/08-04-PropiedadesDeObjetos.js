// funcion o metodo es lo mismo
// La diferencia entre un tipo primitivo 
// y un Objeto es que el tipo primitivo no contiene atributos

let x = 10;
console.log(x.length);

let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'jperez@mail.com',
    edad: 28,
    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido;
    }
}

console.log(persona.nombre);

// Se puede acceder a las propiedades de un objeto
// como si fuera un Array

console.log(persona['apellido']);

// Se pueden recorrer todas las propiedades del objeto
// como un Array pero dentro de un ciclo 'for in'

for( nombrePropiedad in persona){
    console.log( nombrePropiedad);
    console.log( persona[nombrePropiedad]);
}

