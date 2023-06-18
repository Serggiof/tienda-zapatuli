import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';
import { CarritoService } from '../servicios/carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css'],
 
})
export class CarritoComponent implements OnInit{
  productosSeleccionados: any[];

  constructor(private _carritoService: CarritoService) { 
    this.productosSeleccionados = this._carritoService.obtenerProductosSeleccionados();
  }

  ngOnInit(): void {
   
  }
  /*FUNCIONES*/
  
eliminarProducto(producto: any) {
  const indice = this.productosSeleccionados.indexOf(producto);
  if (indice !== -1) {
    this.productosSeleccionados.splice(indice, 1);
  }
}

calcularTotal(){
  let total=0;
  for (const producto of this.productosSeleccionados) {
    total += producto.precio;
  }
  return total;
}


 /* getCarrito(carrito: Zapatilla){
    return this.carrito
}*/
  }


