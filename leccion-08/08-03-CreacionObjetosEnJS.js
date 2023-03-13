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
console.log(persona.edad);
console.log(persona.apellido);

console.log(persona);
console.log(persona.nombreCompleto());

// En Javascript se pueden crear objetos con la palabra
// reservada NEW

let persona2 = new Object();
persona2.nombre = 'Carlos';
persona2.apodo = "Conejo Negro"
persona2.direccion = 'San Lorenzo casi Rioja'
persona2.tel = '374978'

console.log(persona2.apodo);