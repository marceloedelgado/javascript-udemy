// Si queremos crear objetos y reutilizar codigos de objetos manuales
// no es posible
// Para ello usaremos el Metodo Constructor

// Funcion / Metodo constructor de objetos de tipo Persona
function Persona(nombre, apellido, email){
    this.nombre  = nombre;
    this.apellido = apellido;
    this.email = email;
}

// Vamos a crear un objeto de tipo Persona reutilizando codigo

let padre = new Persona('Juan', 'Perez', 'jperez@gmail.com');
console.log( padre );

let madre = new Persona('Laura', 'Quintero', 'lquintero@gmail.com');
console.log( madre );

let hijo = new Persona('Omar', 'Perez Quintero', 'operezquintero@gmail.com');
console.log ( hijo );

padre.nombre = 'Carlos';
console.log ( padre );
padre.email = 'cperez@gmail.com';
console.log ( padre)