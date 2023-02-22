// Paso por valor es cuando utilizamos
// tipos que no son objetos

let x = 10; // valor primitivo sin propiedades ni métodos

// Crear un método para cambiar valor del paso primitivo, cómo no es posible se Pasa el valor y se cambia en el método

function cambiarValor(a) { //  a = x
    a = 20;
    
}

// Paso por valor |
cambiarValor(x); 
// 10
console.log(x);
console.log(a); // esta variable se destruye al paasarle el valor a x

