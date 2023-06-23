import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';
import { ZapatillaService } from '../servicios/zapatilla.service';
import { CarritoService } from '../servicios/carrito.service';


@Component({
  selector: 'app-calzado',
  templateUrl: './calzado.component.html',
  styleUrls: ['./calzado.component.css'],
  providers: [ZapatillaService]

})
export class CalzadoComponent implements OnInit{
//Creamos un array zapatillas para recorre la clase Zapatilla
 public zapatillas!: Array<Zapatilla>
 //El signo de exclamación (!) se utiliza para indicar que una variable no es nula (non-null assertion).
 
  // String para capturar lo que quiere buscar el usuario
 dataInputSearch= ''
  // Creamos un array para guardar la busqueda del usuario
  zapasData: Zapatilla[] = [];
  //public cantidadCarrito: number = 0;
  // Array carrito para almacenar los datos seleccionados
  public carrito: Zapatilla[] = [];
  
  cantidadCarrito: number = 0; // Variable para almacenar la cantidad de productos en el carrito

  //Array para los talles
 //public talles: Array<number>=[36, 39, 40, 42, 43]

  constructor(private _zapatillaService: ZapatillaService,
              private _carritoService: CarritoService
              ){
   
  }
  
  ngOnInit(): void {
   // console.log(this.zapatillas)
    this.zapatillas = this._zapatillaService.getZapatillas()
   // inicializamos el array de zapatilas
    this._carritoService.agregarProducto
    }

              /*! FUNCIONES ¡*/  
  //Funcion para agregar al carrito  
  addCarrito(producto: any) {
      this._carritoService.agregarProducto(producto);
     // this.cantidadCarrito = this._carritoService.obtenerProductosSeleccionados().length;
     
      
    }

  //Funcion para la busqueda de un articulo por marca  
 public buscarZapa() {
      const zapasFilter: Zapatilla[] = [];
      this.zapatillas.forEach(el =>{
        if (el.marca.toLocaleLowerCase().includes(this.dataInputSearch.toLocaleLowerCase())){
        zapasFilter.push(el);
      }else{}
    })
      this.zapasData = zapasFilter
    }
    /*Funcion para sumar carro   */

 
    
  /*FUCIONES SIN FUNCIONAMIENTO
   addCarrito(producto: any) {
    // Lógica para agregar al carrito
    this._carritoService.addProductoSeleccionado(producto);
  }
   /* getZapas() {
      this.zapatillas.forEach((zapatilla, index) => {
          if (this.zapas.indexOf(zapatilla.marca) < 0) {
              this.zapas.push(zapatilla.marca);
          }
      });
      console.log(this.getZapas);
  } */
  /*addCarrito(zapatilla: Zapatilla){
  this.carrito.push(zapatilla);
  }
  /*
  addCarrito(producto: any) {
    // Lógica para agregar al carrito
    this._carritoService.setProductoSeleccionado(producto);

  }*/
}
