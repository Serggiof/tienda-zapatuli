import { Injectable } from "@angular/core";
import { Zapatilla } from "../models/zapatilla";
@Injectable()
export class ZapatillaService{
    public zapatillas: Array<Zapatilla>
    //cargamos el array por un servicio
    constructor(){
        this.zapatillas = [
            new Zapatilla('NIKE', 'AIR-MAX', 29500, '../assets/img/nike-2.jpg',[36, 39, 40, 42, 43]  ),
            new Zapatilla('PUMA', 'SHUFFLE', 24500, '../assets/img/puma-1.jpg', [35, 37, 39, 42, 43]),
            new Zapatilla('ASICS', 'GEL-NIMBU-25', 75500, '../assets/img/asics-1.jpg', [36, 39, 40, 42, 43]),
            new Zapatilla('VANS', 'URBAN', 38100, '../assets/img/vans-1.jpg',[36, 39, 40, 42, 43])
          ]
    }
    getZapatillas(): Array<Zapatilla>{
        return this.zapatillas
    }
}