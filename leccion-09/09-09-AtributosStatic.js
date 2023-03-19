// Vamos a definir atributos Static a nuestra Clase



class Persona {

    static contadorObjetosPersona = 0;

    constructor(nombre, apellido){

        this._nombre = nombre;
        this._apellido = apellido;
        Persona.contadorObjetosPersona++;
        console.log('Se incrementa el contador: ' + Persona.contadorObjetosPersona);

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
        return this._nombre + ' ' + this._apellido;
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
console.log( persona1.toString());

let empleado1 = new Empleado('Maria', 'Jimenez', 'Sistemas');
console.log(empleado1);
console.log( empleado1.nombre);
console.log(empleado1.nombreCompleto() ); 
// Polimorfismo estamos llamando ▲ al método de la clase Padre o hija para el NomyApellido
// ddependiendo con cuál estamemos trabajando ▼ para Departamento
console.log(empleado1.toString()); 

// persona1.saludar(); No es posible llamar a un método Statico desde un Objeto

// Se dice que método Static se asocia con una Clase pero no con los Objetos

Persona.saludar();

// A un método Static se le puede pasar como argumentos un objeto

Persona.saludar2(persona1);

// Si queremos mandar a llamar el método static desde la clase empleado

Empleado.saludar();
Empleado.saludar2(empleado1)

// Ulizando el Contador mediante un Objeto

console.log( persona1.contadorObjetosPersona);// toma como variable nueva al objeto persona1
// Se debe acceder a la variable ContadorObjetos desde la Clase Padre Persona
console.log( Persona.contadorObjetosPersona);

// Que pasaría si se intenta acceder a la variable desde la clase hija
console.log(Empleado.contadorObjetosPersona);