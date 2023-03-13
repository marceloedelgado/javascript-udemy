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

// Con console.log enviamos a imprimir el objeto pero
// dentro de un navegador web podriammos no tener el mismo resultado
// con lo que veríamos 'object Object' sin valores y propiedades
// En un navegador web tenemos otras formas de imprimir

// 1 - Concatenar cada valor de cada propiedad
console.log ( persona.nombre + ', ' + persona.apellido);

// 2 - Iterar cada una de las propiedades utilizando for in
for( nombrePropiedad in persona ){
    console.log(persona[nombrePropiedad])
}

// 3 - Utilizando la sintaxis de Object.values como un Array o Arreglo
let personaArray = Object.values ( persona );
console.log( personaArray )

// 4 - Utilizando una cadena. Convierte el Objeto en un String
let personaString = JSON.stringify( persona ); // JSON se adecuadda al manejo de objetos porque utiliza la notacion de propiedad y valor. El metodo stringify convirte los valores de las propiedades de nuestro objeto a cadena String
console.log( personaString );

// Cuando estamos trabajando en un navegador web necesitamos diferentes formas
// mandar a imprimir para ver las propiedades de nuestro objeto



