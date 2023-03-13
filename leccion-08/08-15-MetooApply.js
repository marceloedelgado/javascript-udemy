// Metodo Apply

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

console.log(persona1.nombreCompleto('Lic', '66887711') );

// Uso metodo Apply puede pasar un Array con los valores de los argumentos 

let arreglo = ['Ing', '55443322']
console.log(persona1.nombreCompleto.apply(persona2, arreglo)  );