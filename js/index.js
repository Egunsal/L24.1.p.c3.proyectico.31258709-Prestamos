import Cl_oficina from "./Cl_oficina.js";
import Cl_prestamo from "./Cl_prestamo.js";
import Dt_oficina from "./Dt_oficina.js";
import Dt_prestamos from "./Dt_prestamos.js";


let oficina = new Cl_oficina(Dt_oficina.montoCaja,Dt_oficina.porcComisionMensual)

Dt_prestamos.forEach((prestamo) => oficina.agregarCliente(new Cl_prestamo(prestamo.cliente,prestamo.codigo,prestamo.prestamo,prestamo.meses)))

let clientesMeses2= (oficina, salida) =>{
    let clientes = oficina.clientesMeses2()
    salida.innerHTML= "<br>Clientes que pidieron por dos meses: <br>"
    clientes.forEach((cliente) =>
    salida.innerHTML +=`<br>Nombre: ${cliente.cliente}, Codigo: ${cliente.codigo}`)}

    let clientesMenorPrestamo= (oficina, salida) =>{
        let clientes = oficina.clientesMenorPrestamo()
        salida.innerHTML= "<br>Clientes que pidieron el prestamo minimo: <br>"
        clientes.forEach((cliente) => 
        salida.innerHTML +=`<br>Nombre: ${cliente.cliente}, Codigo: ${cliente.codigo}`)
    }

let agregarCliente= (oficina) =>{
  let cliente = prompt("ingrese el nombre del cliente");
  let  codigo = prompt("ingrese el codigo del cliente");
  let prestamo = prompt("ingrese el prestamo que pidio el cliente")
  let meses = prompt("ingrese la cantidad de meses que pidio el cliente")
  oficina.agregarCliente(new Cl_prestamo(cliente,codigo,prestamo,meses))
}
let eliminarCliente = (oficina) => {
  let codigo = prompt("Ingrese el codigo del cliente a eliminar:");
  if (oficina.eliminarCliente(codigo)) alert(`Se eliminó el cliente con el codigo :${codigo}`);
  else alert(`No existe el cliente con el codigo: ${codigo}`);}

let montoFinal = (oficina, salida) =>{
  salida.innerHTML = "<br>Monto disponible en caja: "+ oficina.montoFinal()
 
}
let salida1 = document.getElementById("salida1"),
  salida2 = document.getElementById("salida2"),
  opciones = document.getElementById("opciones");

salida1.innerHTML = `<br>Seleccione una opción:
  <br>1= Agregar cliente
  <br>2= Monto disponible en caja
  <br>3= Clientes que pidieron por dos meses
  <br>4= Clientes que pidieron el prestamo minimo
  <br>5= Eliminar cliente`
  
opciones.onclick = () => {
    let opcion = +prompt("seleccione su opcion:")
    switch(opcion){
        case 1:
         agregarCliente(oficina)
         break;
         case 2:
           montoFinal(oficina, salida2)
            break;
          case 3:
            clientesMeses2(oficina, salida2)
          break;
          case 4:
            clientesMenorPrestamo(oficina, salida2)
          break;
          case 5:
            eliminarCliente(oficina, salida2)
            break;
    }
    
}
