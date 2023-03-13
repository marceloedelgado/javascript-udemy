// Para agregr un nueva propiedad usar PROTOYPE en el Object
function Persona(nombre, apellido, email){
    this.nombre  = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function() {
        return this.nombre + ' ' + this.apellido;
    }
}


// Utilizar PROTOTYPE para agregar una propiedad

Persona.prototype.tel = '44332211';

let padre = new Persona('Juan', 'Perez', 'jperez@gmail.com');
padre.tel = '11223344'

console.log( padre.tel );

let madre = new Persona('Laura', 'Quintero', 'lquintero@gmail.com');
madre.tel = '66889900'
console.log( madre.tel);


