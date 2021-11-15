import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../interface/cliente';
import { ClientesService } from '../services/clientes.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  cliente:Cliente={
    idCliente: null,
    emailCliente: null,
    nombreCliente: null,
    direccionCasaCliente: null,
    dniCliente: null,
    celularCliente: null,
    contraCliente: null,
  }
  verificarcontraCliente?: null
  constructor(private clientesService:ClientesService, public router: Router) { }

  ngOnInit(): void {
  }
  register(){
    if (
      this.cliente.emailCliente == undefined ||
      this.cliente.nombreCliente == undefined ||
      this.cliente.direccionCasaCliente == undefined ||
      this.cliente.dniCliente == undefined ||
      this.cliente.celularCliente== undefined ||
      this.cliente.contraCliente == undefined ||
      this.verificarcontraCliente == undefined
      ) {
      alert('Faltan completar datos')
    }else if( !(this.cliente.contraCliente == this.verificarcontraCliente)){
      alert('Verificar Contraseñas')
    }else{
      this.clientesService.registrar(this.cliente).subscribe( (data:any) => {
        alert('Registrado Correctamente - '+data.nombreCliente)
        console.log(data)
        this.clientesService.setToken(data.idCliente);
        this.router.navigateByUrl('form');
      },(e)=>{
        alert('Error al registrar')
        console.log(e)
      });
    }
  }
}
