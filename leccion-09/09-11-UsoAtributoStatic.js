// Vamos a definir atributos Static a nuestra Clase



class Persona {

    static contadorPersonas = 0; // Atributo de nuestra Clase

    constructor(nombre, apellido){

        this._nombre = nombre;
        this._apellido = apellido;
        this.idPersona = ++Persona.contadorPersonas;
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
        // Se aplica polimorfismo
        return this.idPersona + ' ' + this._nombre + ' ' + this._apellido;
    }

    // Sobreescribiendo el métodddo dde la clase Padre (Object)
    toString(){
//POLIMORFISMO: Múltiples formas en tiempo de ejecución.
// el método que se ejecuta depende si es una reeferencia de tipo Padre o de tipo Hijo
        return this.nombreCompleto();
    }

    static saludar(){
        console.log('Saludos desde el metodo Static');
    }

    static saludar2(persona){
        console.log(persona.nombre + ' ' + persona.apellido);

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

    //Sobreescritura
    nombreCompleto(){
        return super.nombreCompleto() + ', ' + this._departamento;
    
    }

}

let persona1 = new Persona('Juan', 'Perez');
console.log(persona1.toString());

let empleado1 = new Empleado('Maria', 'Jimenez', 'Sistemas');
console.log(empleado1.toString()); 

console.log(Persona.contadorPersonas);

let persona2 = new Persona('Carla', 'Ramirez');
console.log(persona2.toString());
console.log(Persona.contadorPersonas);
