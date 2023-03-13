// Cuando trabajamos con la función Call podemos pasarle argumentos

let persona1 = {
    nombre: 'Juan',
    apellido:'Perez',
    nombreCompleto: function(titulo, tel){
        return titulo + ': ' + this.nombre + ' ' + this.apellido + ', ' + tel;
    }
}

let persona2 = {
    nombre: 'Carlos',
    apellido: 'Lara',

}

// Uso del Call para usar el metodo nombreCompleto que
// pertenece al Objeto persona1 con datos de persona2

console.log(persona1.nombreCompleto('Lic', '44332211' ) );

// Imprimimos mediante call
console.log(persona1.nombreCompleto.call( persona2, 'Ing', '555666777')  );