class Cliente extends Persona{

    static contadorClientes = 0;

    constructor( nombre, apellido, edad, FechaRegistro ){
        super(nombre, apellido, edad);
        this._fechaRegistro = FechaRegistro;
        this._idCliente = 'C00' + ++Persona.contadorClientes;
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
        return  'ID_Cliente: ' + this._idCliente   + ' ' + super.toString() + ' ' + this._fechaRegistro;
    }

    toString(){
        return this.datosClientes();
    }
}
