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
        ID_Empleado: ${this._idEmpleado} 
        ${super.toString()}`;
    }

    toString(){
        return this.datosEmpleado();
    }
     
}
