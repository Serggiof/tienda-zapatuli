import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';
import { CarritoService } from '../servicios/carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css'],
 
})
export class CarritoComponent implements OnInit{
  
 public productoSeleccionado: any
  constructor(private _carritoService: CarritoService) { 
    this.productoSeleccionado = this._carritoService.productoSeleccionado;
    //this.productoSeleccionado = this._carritoService.getProductosSeleccionados();
  }

  ngOnInit(): void {
   
  }
  /*FUNCIONES*/
 /* getCarrito(carrito: Zapatilla){
    return this.carrito
}*/
  }


