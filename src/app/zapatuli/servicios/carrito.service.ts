import { Injectable } from "@angular/core";
@Injectable()

export class CarritoService{
    //productosSeleccionados: any[] = [];
    productoSeleccionado: any;

    setProductoSeleccionado(producto: any) {
        this.productoSeleccionado = producto;
      }
      /*FUCIONES SIN FUNCIONAMIENTO
      addProductoSeleccionado(producto: any) {
        this.productosSeleccionados.push(producto);
      }
      getProductosSeleccionados() {
        return this.productosSeleccionados;
      }*/
}