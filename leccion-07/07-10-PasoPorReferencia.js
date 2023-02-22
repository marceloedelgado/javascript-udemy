// PASO POR REFERENCIA

// Crear un objeto
const persona = {
    nombre: 'Juan',    // El atributo como Referencia
    apellido: 'Perez'
}

function cambiarValorObjeto(p1) { // con la variable P1 vamos a acceder a los atributos del objeto
    p1.nombre = 'Carlos';
    p1.apellido = 'Lara';
}

// Paso por Referencia
cambiarValorObjeto( persona );
console.log(persona);