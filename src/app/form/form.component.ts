import { Component, OnInit } from '@angular/core';
import { Prestamo } from "../interface/prestamo";
import { PrestamosService } from "../services/prestamos.service";
import { ClientesService } from "../services/clientes.service";
import { Router } from '@angular/router';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {
   prestamo:Prestamo={
      montoPrestamo:null,
      cuotasPrestamo:null,
      fechaPrestamo:new Date(Date.now()).toISOString().split('T')[0],
      estadoPrestamo:'pendiente',
      idCliente:null,
  };
  cliente={
     idCliente :  null ,
     nombreCliente :   null,
     dniCliente :   null,
     direccionCasaCliente :   null  ,
     contraseñaCliente :   null  ,
     created_at :  null ,
     updated_at :  null
  }
  constructor(private prestamosService:PrestamosService, public clientesService:ClientesService, public router: Router) {}
  ngOnInit(): void {
    this.getUserLogged();
  }
  getUserLogged() {
    this.clientesService.getCliente().subscribe((cliente:any) => {
      this.cliente = cliente;
      this.prestamo.idCliente=cliente.idCliente
    });
  }
  logout(){
    this.clientesService.logged();
  }
  registrarSolicitud(){
    if (this.prestamo.montoPrestamo==null || this.prestamo.fechaPrestamo==null|| this.prestamo.cuotasPrestamo==null) {
      alert("Faltan completar datos")
    }else{
      this.prestamosService.save(this.prestamo).subscribe((data:any)=>{
        alert(
          `Solicitud de Prestamo de $ ${data.montoPrestamo} Registrado 
          \nEnviado correo electronico----------------`
        )
        this.logout()
      },(error)=>{
        alert('Error al guardar la Solicitud de Prestamo')
        console.log(error)
      })
    }
  }
}
