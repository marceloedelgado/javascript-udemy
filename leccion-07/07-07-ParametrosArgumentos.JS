// Una función al definirla o declararla con variables son Los argumentos (a, b)

// Los parámetros son los valores que finalmente asignamos a los argumentos.(2, 4)


let sumar = function (a = 4, b = 5){ // Pueden ir con valores por default
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2])
    return a + b + arguments[2]};

resultado = sumar(3, 6, 7); // Pueden ir valores en argumentos
console.log(resultado);

// La cantidad de argumentos no necesariamente tiene que coincidir
// con la cantidad de parámetros.