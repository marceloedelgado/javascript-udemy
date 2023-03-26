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

miPromesa
.then(valor => console.log(valor))
.catch(error =>console.log(error));

