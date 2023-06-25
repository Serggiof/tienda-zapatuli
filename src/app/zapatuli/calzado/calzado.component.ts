import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';
import { ZapatillaService } from '../servicios/zapatilla.service';
import { CarritoService } from '../servicios/carrito.service';
import { ContadorService } from '../servicios/contador.service';

import { Router } from '@angular/router';

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
 
 /*BUSCADOR */
  // String para capturar lo que quiere buscar el usuario
 dataInputSearch= ''
  // Creamos un array para guardar la busqueda del usuario
  zapasData: Zapatilla[] = [];
 /* */ 
  cantidadCarrito: number = 0; // Variable para almacenar la cantidad de productos en el carrito
 /**Atraves del constructor llamamos a los servicios
  * para asi poder emplearlos en los diferentes metodos
  */ 
  constructor(private _zapatillaService: ZapatillaService,
              private _carritoService: CarritoService,
              private _contadorService:ContadorService,
              // Creamos un contructor del router
              private router: Router
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
     
      
    }

  //FUNCIONE para la BUSQUEDA de un articulo por marca  
  public buscarZapa() {
    // Creamos un arreglo vacio para almacenar las zapatillas filtradas
    const zapasFilter: Zapatilla[] = [];
    // Iteramos el array usando el metodo forEach
    this.zapatillas.forEach(el => {
      //para cada elemento "el" en el arreglo zapatillas se realiza una verificacion de la marca (La condición)
      //Se verifica si el nombre de la marca de la zapatilla actual (el.marca) contiene el 
      //valor de this.dataInputSearch, que representa el término de búsqueda ingresado por el usuario.
      if (el.marca.toLocaleLowerCase().includes(this.dataInputSearch.toLocaleLowerCase())) {
        //Si la condicion es verdadera la zapatilla actual se agrega al arreglo "zapasFilter", utilizando el metodo "push()"
        zapasFilter.push(el);
      } else { } // Si no coincide no sucede nada
    })
    //Al finalizar el bucle forEach(), el arreglo zapasData se actualiza con los resultados filtrados almacenados en zapasFilter. 
    //Esto asegura que los resultados de búsqueda se muestren en la interfaz de usuario.
    this.zapasData = zapasFilter
  }
  public verDescripcion(zapatillaId: number) {
    // Aquí puedes redirigir al enlace correspondiente a la descripción del producto
    // El router de Angular se usa para navegar a la ruta deseada
    // Por ejemplo:
    this.router.navigate(['/descripcion', zapatillaId]);
  }

    //FUNCION para agregar numero al badge del carrito
  public count: number = 0;
    sendNumber() {
      this._contadorService.sendNumber(this.increament());
    }
    increament() {
     this.count += 1;
      console.log("done");
      return this.count;
    }
    


}
