// Function Self Invoking. Puede ser util para cuando necesitemos una funcion que se llame a si misma cuando se cargue el sitio

(function (a, b){
    console.log('Ejecutando la función: ' + (a + b));
})(3, 4);