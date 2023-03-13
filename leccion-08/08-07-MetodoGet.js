// Metodo GET y SET para acceder a las propiedades de nuestro Objeto

let x = 10;
console.log(x.length);

let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'jperez@mail.com',
    edad: 28,
    get nombreCompleto(){ // Ya no es una propiedad sino un metodo GET
        return this.nombre + ' ' + this.apellido;
    }
}

// Para acceder a la función dentro del Objeto
console.log ( persona.nombreCompleto );



