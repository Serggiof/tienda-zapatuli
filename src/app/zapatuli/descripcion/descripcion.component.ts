import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ZapatillaService } from '../servicios/zapatilla.service';
import { Zapatilla } from '../models/zapatilla';

@Component({
  selector: 'app-descripcion',
  templateUrl: './descripcion.component.html',
  styleUrls: ['./descripcion.component.css']
})
export class DescripcionComponent implements OnInit {
  // Se declara una variable zapatilla con el tipo Zapatilla o undefined. 
  //Esta variable se utilizará para almacenar la zapatilla que se obtendrá del servicio.
  zapatilla: Zapatilla | undefined;

  constructor(
    //El siguiente parametro se utiliza para obtener informacion de la ruta
    private route: ActivatedRoute,
    // El siguiente parametro se utiliza para acceder al servicio de zapatillas respectivamente.
    private _zapatillaService: ZapatillaService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const zapatillaId = Number(params.get('id'));
      this.zapatilla = this._zapatillaService.getZapatillaById(zapatillaId);
    });
  }
}
