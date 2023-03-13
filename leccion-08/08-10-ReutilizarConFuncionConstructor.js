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

// De esta forma ya no hacemos modificaciones sobre las variables
// Agregando propiedades o métodos desde la Función Constructor
// Podemos reutilizar el código