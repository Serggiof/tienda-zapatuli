import { Injectable } from "@angular/core";
@Injectable()

export class CarritoService{
  /*Creamos un array para almacenar los productos seleccionados */
  productosSeleccionados: any[] = [];

  agregarProducto(producto: any) {
    this.productosSeleccionados.push(producto);
    /** Usamos este metodo para hacer el push al array de productosSeleccionados
     * para cargar el mismo con lo elegido
     */
  }

  obtenerProductosSeleccionados() {
    return this.productosSeleccionados;
    /**Este metodo simpliemente nos devuelve el array para
     * usarlos en los componetes carrito y calzado
      */
  }
    
}