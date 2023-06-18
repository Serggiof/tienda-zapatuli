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
  
  //public zapas: String[];
  // Array carrito para almacenar los datos seleccionados
  public carrito: Zapatilla[] = [];

  constructor(private _zapatillaService: ZapatillaService,
              private _carritoService: CarritoService){
   /*this.zapatillas = [
      new Zapatilla('NIKE', 'AIR-MAX', 29500, '../assets/img/nike-2.jpg'),
      new Zapatilla('PUMA', 'SHUFFLE', 24500, '../assets/img/puma-1.jpg'),
      new Zapatilla('ASICS', 'GEL-NIMBU-25', 75500, '../assets/img/asics-1.jpg'),
      new Zapatilla('VANS', 'URBAN', 38100, '../assets/img/vans-1.jpg')
    ]*/
  
  }
  
  ngOnInit(): void {
   // console.log(this.zapatillas)
    this.zapatillas = this._zapatillaService.getZapatillas()
   // inicializamos el array de zapatilas
  
    }
  
  addCarrito(producto: any) {
    // Lógica para agregar al carrito
    this._carritoService.setProductoSeleccionado(producto);

  }
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
  }*/
}
