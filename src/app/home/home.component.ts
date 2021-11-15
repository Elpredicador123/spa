import { Component, OnInit } from '@angular/core';
import { PrestamosService } from "../services/prestamos.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor(private prestamosService:PrestamosService) {

   }
  ngOnInit(): void {
  }

}
