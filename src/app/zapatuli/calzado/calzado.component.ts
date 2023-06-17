import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';

@Component({
  selector: 'app-calzado',
  templateUrl: './calzado.component.html',
  styleUrls: ['./calzado.component.css']
})
export class CalzadoComponent implements OnInit{

  public zapatillas: Array<Zapatilla>
  //Creamos un array marcas para recorre la clase Zapatillas
  //public zapas: String[];
  

  constructor(){
    this.zapatillas = [
      new Zapatilla ('NIKE', 'AIR-MAX', 29500,'../assets/img/nike-2.jpg'),
      new Zapatilla ('PUMA', 'SHUFFLE', 24500,'../assets/img/puma-1.jpg'),
      new Zapatilla ('ASICS', 'GEL-NIMBU-25', 75500,'../assets/img/asics-1.jpg'),
      new Zapatilla ('VANS', 'URBAN', 38100,'../assets/img/vans-1.jpg'),
      
    ]
    //this.zapas = new Array();
  }
  
  ngOnInit(): void {
    console.log(this.zapatillas)
    //this.getZapas();
   

    }
   /* getZapas() {
      this.zapatillas.forEach((zapatilla, index) => {
          if (this.zapas.indexOf(zapatilla.marca) < 0) {
              this.zapas.push(zapatilla.marca);

          }
      });
      console.log(this.getZapas);
     
  } */
  addCarrito(){

  }

          
        
}
