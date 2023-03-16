// HERENCIA y Métodos a la clas hija

class Persona {
    constructor(nombre, apellido){
    this._nombre = nombre;
    this._apellido = apellido;

    }

    get nombre(){
        return this._nombre;

    }

    set nombre(nombre){
        this._nombre = nombre;
       
    }

    get apellido(){
        return this._apellido;
    }

    set apellido(apellido){
        this._apellido = apellido;
    }
    // Método para imprimir Nombre Completo en la clase hija
    nombreCompleto(){
        return this._nombre + ' ' + this._apellido;

    }

}

class Empleado extends Persona {
    constructor(nombre, apellido, departamento){
        super(nombre, apellido);  // Llamar al constructor de la clase Padre
        this._departamento = departamento;
}
    get departamento(){
        return this._departamento;
    }

    set departamento(departamento){
        this._departamento = departamento;
    }
}

let persona1 = new Persona('Juan', 'Perez');
console.log( persona1);// llama a get nombre

let empleado1 = new Empleado('Maria', 'Jimenez', 'Sistemas');
console.log(empleado1);
console.log( empleado1.nombre);

console.log(empleado1.nombreCompleto());