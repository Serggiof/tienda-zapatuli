import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../servicios/carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css'],
 
})
export class CarritoComponent implements OnInit{
  
  productosSeleccionados: any[];

  constructor(private _carritoService: CarritoService){ 

    this.productosSeleccionados = this._carritoService.obtenerProductosSeleccionados();
  }
  ngOnInit(): void {}
  
  /*FUNCION ELIMINAR*/
  eliminarProducto(producto: any) {
   const indice = this.productosSeleccionados.indexOf(producto);
   if (indice !== -1) {
    this.productosSeleccionados.splice(indice, 1);
  }
  /**Este metodo toma producto como varible para hacer la eliminacion y
   * le damos un indice a y usamos el metodo indexOf para encontrar el indice y asi
   * hacer la eliminacion
   * */
 }
/*FUNCION que nos suma el total de los elementos en el carrito  */
  calcularTotal(){
   let total=0;
   for (const producto of this.productosSeleccionados) {
    total += producto.precio;
  }
  return total;
 }

}


