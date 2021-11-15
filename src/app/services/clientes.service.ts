import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { CookieService } from "ngx-cookie-service";
import { Router } from '@angular/router';
import { Cliente } from '../interface/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http: HttpClient, private cookies: CookieService,public router: Router) { }

  login(cliente: any): Observable<any> {
    return this.http.get("https://mihbapi.herokuapp.com/api/clientes", {
      params: {
        dniCliente: cliente.dniCliente,
        contraseñaCliente: cliente.contraseñaCliente
      }
    });
  }
  registrar(cliente: Cliente){
    return this.http.post("https://mihbapi.herokuapp.com/api/registrar", cliente);
  }


  setToken(id:any) {
    this.cookies.set("id", id);
  } 
  getToken() {
    return this.cookies.get("id");
  }
  getCliente() {
    let id = this.cookies.get("id");
    return this.http.get("https://mihbapi.herokuapp.com/api/cliente", {
      params: {
        idCliente:id
      }
    });
  }
  getClienteLogged() {
    const token = this.getToken();
    // Aquí iría el endpoint para devolver el usuario para un token
  }
  logged(){
    this.cookies.delete("id");
    this.router.navigateByUrl('');
  }
}
