class Empleado{
    constructor(nombre, sueldo){
        this._nombre = nombre;
        this._sueldo = sueldo;

    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get sueldo(){
        return this._sueldo;
    }

    set sueldo(sueldo){
        this._sueldo = sueldo;
    }

    obtenerDetalles(){
        return `Empleado: Nombre: ${this._nombre}, Sueldo: ${this._sueldo}`;

    }
}

class Gerente extends Empleado{
    constructor(nombre, sueldo, departamento){
        super(nombre, sueldo);
        this._departamento = departamento;
    }

    get departamento(){
        return this._departamento;
    }

    set departamento(departamento){
        this._departamento = departamento;
    }

    obtenerDetalles(){
        return `Gerente: ${super.obtenerDetalles()} Departamento: ${this._departamento}`;
    }
}

function determinarTipo(tipo) { // no asignamos ninguna referencia de tipo
    console.log( tipo.obtenerDetalles() ); // con Instance Of podemos saber con cual estamos trabajando
    if (tipo instanceof Gerente) {
        console.log('Es un objeto de tipo Gerente');
        console.log(tipo._departamento);
    }

    else if (tipo instanceof Empleado) {
        console.log('Es un objeto de tipo Empleado');
        console.log(tipo._departamento); // No fue asignado el atributo departamento en la clase padre solo en la clase hija
    }

    else if (tipo instanceof Object) {
        console.log('Es un objeto de tipo Object')
    }
}

let gerente1 = new Gerente('Carlos', '5000','Sistemas');
//console.log( gerente1.obtenerDetalles() );

let empleado1  = new Empleado('Juan', 3000);
//console.log( empleado1.obtenerDetalles());

determinarTipo( empleado1 ); // tipo clase padre
determinarTipo( gerente1 ); // tipo clase hija

