class Persona {

    static contadorPersonas = 0;

   

   

    constructor(nombre, apellido, edad){

        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
        this._idPersona = ++Persona.contadorPersonas;
    }

    get idPersona(){
        return this._idPersona;
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

    
    get edad(){
        return this._edad; 
    }

    set edad(edad){
        this._edad =  edad;
    }

    datosPersonales(){
        return `
        ${this._idPersona} ${this._nombre} ${this._apellido} ${this._edad}`;
         
        

        }

    toString(){
        return this.datosPersonales();
    }
    
}

class Empleado extends Persona{

    static contadorEmpleados = 0;   

    constructor(nombre, apellido, edad, sueldo){
    super(nombre, apellido, edad);
    this._sueldo = sueldo;
    this._idEmpleado = 'E00' + ++Empleado.contadorEmpleados;
     
   
    }

    get idEmpleado(){
        return this._idEmpleado;
       
   }


   get sueldo(){
    return this._sueldo; 
}

set sueldo(sueldo){
    this._sueldo =  sueldo;
}

    datosEmpleado(){
        return  `
        ID_Empleado: ${this._idEmpleado} ${super.toString()} ${this._sueldo}`;
    }

    toString(){
        return this.datosEmpleado();
    }
     
}


class Cliente extends Persona{

    static contadorClientes = 0;

    constructor( nombre, apellido, edad, FechaRegistro ){
        super(nombre, apellido, edad)
        this._fechaRegistro = FechaRegistro;
        this._idCliente = 'C00' + ++Cliente.contadorClientes;
    }     
    
    get idCliente(){
        return this._idCliente;
       
   }


    get FechaRegistro(){
        return this._fechaRegistro(Date);
    }

    set FechaRegistro(FechaRegistro){
        return this._fechaRegistro = FechaRegistro; 
    }

    datosClientes(){
        return  `ID_Cliente: ${this._idCliente} ${super.toString()} ${this._fechaRegistro}`;
    }

    toString(){
        return this.datosClientes();
    }
}

let persona1 = new Persona('Juan', 'Perez', 28);
console.log( persona1.toString());

let persona2 = new Persona('Karina', 'Gonzalez', ' Edad:' + 25);
console.log( persona2.toString());

let persona3 = new Persona('Esteban', 'Quito', 'Edad:' + 22);
console.log( persona3.toString());

let empleado1 = new Empleado('Karla', 'Gomez', '25', '5.000');
console.log(empleado1.toString());

let empleado2 = new Empleado('Laura', 'Quintero', '33', '7.000');
console.log(empleado2.toString());

let cliente1 = new Cliente('Miguel', 'Cervantes', '30', new Date());
console.log(cliente1.toString())

let cliente2 = new Cliente('Maria', 'Lara', '38', new Date());
console.log(cliente2.toString())

