import { Injectable } from "@angular/core";
@Injectable()

export class CarritoService{
  //Array para agregar los objetos seleccionados para la lista
  productosSeleccionados: any[] = [];

  agregarProducto(producto: any) {
    this.productosSeleccionados.push(producto);
    
  }

  obtenerProductosSeleccionados() {
    return this.productosSeleccionados;

  }
    
      /*FUCIONES SIN FUNCIONAMIENTO
      addProductoSeleccionado(producto: any) {
        this.productosSeleccionados.push(producto);
      }
      getProductosSeleccionados() {
        return this.productosSeleccionados;
      }
      //productosSeleccionados: any[] = [];
    /*productoSeleccionado: any;

    setProductoSeleccionado(producto: any) {
        this.productoSeleccionado = producto;
      }*/
}