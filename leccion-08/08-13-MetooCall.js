// Méetodo Call nos permitirá llamar un método definido
// en un Objeto en otro Objeto

let persona1 = {
    nombre: 'Juan',
    apellido:'Perez',
    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido;
    }
}

let persona2 = {
    nombre: 'Carlos',
    apellido: 'Lara',

}

// Uso del Call para usar el metodo nombreCompleto que
// pertenece al Objeto persona1 con datos de persona2

console.log(persona1.nombreCompleto() );

// Imprimimos mediante call
console.log(persona1.nombreCompleto.call( persona2 ) );