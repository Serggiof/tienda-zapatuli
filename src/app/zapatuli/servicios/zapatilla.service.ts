import { Injectable } from "@angular/core";
import { Zapatilla } from "../models/zapatilla";
@Injectable()
export class ZapatillaService{
    public zapatillas: Array<Zapatilla>
    constructor(){
        this.zapatillas = [
            new Zapatilla('NIKE', 'AIR-MAX', 29500, '../assets/img/nike-2.jpg'),
            new Zapatilla('PUMA', 'SHUFFLE', 24500, '../assets/img/puma-1.jpg'),
            new Zapatilla('ASICS', 'GEL-NIMBU-25', 75500, '../assets/img/asics-1.jpg'),
            new Zapatilla('VANS', 'URBAN', 38100, '../assets/img/vans-1.jpg')
          ]
    }
    getZapatillas(): Array<Zapatilla>{
        return this.zapatillas
    }
 
}