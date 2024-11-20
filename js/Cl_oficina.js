export default class Cl_oficina{
    constructor(montoCaja,porcComisionMensual){
        this.montoCaja = montoCaja;
        this.porcComisionMensual = porcComisionMensual;
        this.prestamos = [];
    }
    set montoCaja(montoCaja){
        this._montoCaja= +montoCaja;
    }
    get montoCaja(){
        return this._montoCaja;
    }
    set porcComisionMensual(porcComisionMensual){
        this._porcComisionMensual= +porcComisionMensual;
    }
    get porcComisionMensual(){
        return this._porcComisionMensual;        
    }
    menorPrestamo(){
        let menor = this.prestamos[0].prestamo
        for(let i= 0; i < this.prestamos.length; i++)
            if(this.prestamos[i].prestamo < menor)
                menor = this.prestamos[i].prestamo
            return menor
    }
    montoFinal(){
        let monto1 = this._montoCaja
        for(let i= 0; i < this.prestamos.length; i++)
            monto1 = monto1 - this.prestamos[i].prestamo
        return monto1;
    }
    agregarCliente(prestamo) {
  
        this.prestamos.push(prestamo);
      }
      eliminarCliente(codigo) {
        codigo = +codigo;
        let indexPrestamo = -1;
        for (let i = 0; i < this.prestamos.length; i++)
          if (this.prestamos[i].codigo == codigo) indexPrestamo = i;
        if (indexPrestamo !== -1) this.prestamos.splice(indexPrestamo, 1);
        return indexPrestamo !== -1;
      }
    
   clientesMeses2(){
    return this.prestamos.filter((prestamo)  => prestamo.meses == 2)

   }
 clientesMenorPrestamo(){
    return this.prestamos.filter((prestamo) => prestamo.prestamo == this.menorPrestamo())
 }
}


 
    


