// Agregar / Eliminar propiedades del Objeto

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

persona.tel = '54376478766'
persona.te1 = '54736383793'

console.log( persona );

delete persona.te1

console.log( persona ) ;