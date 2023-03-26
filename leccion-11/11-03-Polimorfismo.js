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

function imprimir(tipo) { // no asignamos ninguna referencia de tipo
    console.log( tipo.obtenerDetalles() ); // Polimorfismo metodo generico independiente el tipo
}

let gerente1 = new Gerente('Carlos', '5000','Sistemas');
console.log( gerente1.obtenerDetalles() );

let empleado1  = new Empleado('Juan', 3000);
console.log( empleado1.obtenerDetalles());

imprimir( empleado1 ); // tipo clase padre
imprimir( gerente1 ); // tipo clase hija
