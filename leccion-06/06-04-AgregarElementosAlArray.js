/*
Los arreglos tipados en JavaScript son objetos similares a arreglos que proporcionan
 un mecanismo para leer y escribir datos binarios sin procesar en búferes de memoria. 
 Como ya sabrás, los objetos Arreglo crecen y se encogen dinámicamente y pueden tener cualquier valor de JavaScript.
*/
// let autos = new Array ('BMW', 'Mercedes Benz', 'Volvo'); // Forma antigua de declarar arreglos

const autos = ['BMW', 'Mercedes Benz', 'Volvo']; // Se almacena en un espacio de memoria
console.log(autos);


// Acceder a los elemntos de un Array. Indice 0 es el primer valor

console.log(autos [0]);
console.log(autos [2]);

for (let i = 0; i < autos.length; i++){
    console.log(i + ' : ' + autos [i]);
}

// Modificar un elemento de un Arreglo o modificar un Arreglo

autos [1] = 'MecedesBenz';
console.log(autos [1]);

// Agregar nuevos valores a un Arreglo

autos.push('Audi');
console.log(autos);

// Agregar elementos al Array en un indice determinado
console.log(autos.length);

autos[autos.length] = 'Cadillac';
console.log(autos);

// Agregar elementos al Array dejando elementos vacions NO RECOMENDABLE

autos[6] = 'Porshe';
console.log(autos); // El indice 5 esta vacio

