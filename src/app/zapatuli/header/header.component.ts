import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ContadorService } from '../servicios/contador.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  public encabezado= 'ZAPATULI'

  number: any;
  subscription: Subscription;

  constructor(private _contadorService: ContadorService) {
    this.subscription = this._contadorService.getNumber().subscribe(number => { this.number = number });
  }
  /**Pasamos por el contructor el sevicio contador para que la informacion
   * viaje y se visualize en nuestro header y hacemos llamado del los metodos
   * corespondientes de esta accion
   */
}
