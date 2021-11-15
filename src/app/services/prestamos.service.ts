import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Prestamo } from '../interface/prestamo';
@Injectable({
  providedIn: 'root'
})
export class PrestamosService {
  constructor(private httpClient:HttpClient) {}
   save(prestamo:Prestamo){
    return this.httpClient.post('https://mihbapi.herokuapp.com/api/prestamos', prestamo)
   }
}
