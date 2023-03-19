// Constante Static
// No se puede crear mediante CONST por lo tanto
// Se hará mediante un método que cree la variable
// que no se pueda modificar simulando una Constante


class Persona {

    static contadorPersonas = 0; // Atributo de nuestra Clase

    static get MAX_OBJ(){
        return 5;        // con la creación de 5 objetos
    } 

    constructor(nombre, apellido){

        this._nombre = nombre;
        this._apellido = apellido;
        if (Persona.contadorPersonas < Persona.MAX_OBJ){
            this.idPersona = ++Persona.contadorPersonas;
        } 
        else{
            console.log('Se han superado el Máximo de Objetos Permitidos');
           
        }
        
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

// -----------------------
console.log( Persona.MAX_OBJ);
Persona,MAX_OBJ = 10; // no va a surtir efecto porque estamos creando un metodo GET
console.log( Persona.MAX_OBJ);
// El método MAX_OBJ funciona como una constante

// Creamos más objetos para comprobar

let persona3 = new Persona('Esteban', 'Quito');
let persona4 = new Persona('Armando', 'Toledo');
let persona5 = new Persona('Laura', 'Quintero');
console.log(persona5.toString());