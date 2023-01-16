/*
6am - 11am - Buenos dias
12pm - 18pm - Buenas tardes
19pm - 24pm - Bueenas noches
0am - 6am - Durmiendo
*/

let hora = 0;
let saludo;

if ( hora >= 6 && hora <= 11 ) {
    saludo = "Buenos días";
} 
else if ( hora >= 12 && hora <= 18 ) {
    saludo = "Buenas tardes";
}
else if ( hora >= 19 && hora <= 24 ) {
    saludo = "Buenas noches";
}
else if ( hora >= 0 && hora < 6 ) {
    saludo = "Buenas Durmiendo";
}
else {
    saludo = "Valor incorrecto";
}
console.log(saludo);