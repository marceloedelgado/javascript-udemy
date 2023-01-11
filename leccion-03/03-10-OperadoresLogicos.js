// Ejeemplo AND (&&), REGRESA true solo si ambos son true

let  a = 15;
let  valMin = 0, ValMax = 10;

if (a >= valMin && a <= ValMax) {
    console.log("Dentro de rango");
} else {
    console.log("Fuera de rango");
    
}

//Ejemplo OR ||| regresa true si cualquiera de los operandos es true
let vacaciones = false, diasDescanso = true;

if (vacaciones || diasDescanso) {
    console.log("Padre puede asistir al juego del hijo")
} else {
    console.log("El padre está ocupado")
}
