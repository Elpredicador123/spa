import { Component, OnInit } from '@angular/core';
import { ClientesService } from "../services/clientes.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    dniCliente?: string ;
    contraCliente?: string ;

  constructor(private clientesService:ClientesService, public router: Router) { }

  ngOnInit(): void {
  }
  login(){
    if (this.dniCliente == undefined || this.contraCliente == undefined) {
      alert('Faltan completar datos')
    }else{
      const cliente = {dniCliente: this.dniCliente, contraseñaCliente: this.contraCliente};
      this.clientesService.login(cliente).subscribe( (data) => {
        this.clientesService.setToken(data.idCliente);
        this.router.navigateByUrl('form');
      },(e)=>{
        alert('Error al Iniciar Sesion')
      });
    }
  }
}
