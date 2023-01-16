// Las Labels no son usadas o no recomendadas pero hay que saberlas
// indicar a través de una etiqueta a una parte del codigo que queramos
// No se usa porque es conocida como "Programación Go-to"

inicio:
for (let contador = 0; contador <= 10; contador++) {
    if ( contador % 2 !==0 ){
        continue inicio; // Ir a la siguiente iteración
    }
    console.log(contador);
}