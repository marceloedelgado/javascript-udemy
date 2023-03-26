// Await esperara el resultado de una promesa

// Una promesa tiene 2 caminos RESOLVED .then() or REJECTED .catch()
let miPromesa = new Promise((resolver, rechazar) => {
    let expresion = true;
    if (expresion)
        resolver('Resolvio correcto');
    else
        rechazar('Se produjo un error');
});

//miPromesa.then(
  //  valor => console.log(valor),
    //error => console.log(error)
//);

// miPromesa
// .then(valor => console.log(valor))
// .catch(error =>console.log(error));

// LLAMAR setTimeout en Promesas

let promesa = new Promise((resolver) => {
    //console.log('inicio promesa');
    setTimeout( ()=> resolver('saludos con promesa y Timeout'), 3000) // Asynchronic
    //console.log('fin de la promesa');

});

// promesa.then(valor => console.log(valor));

// await espera el resultado de una promesa

async function miFuncionConPromesa(){
    return 'saludos con promesas y async';
}

//miFuncionConPromesa().then(valor => console.log(valor));

//async con await

async function funcionConPromesaYAwait(){
    let miPromesa = new Promise( resolver => {
        resolver('Promesa con Await');
    });

    console.log( await miPromesa ); // Recibe el (valor)
}

funcionConPromesaYAwait();