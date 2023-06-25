import { Injectable } from "@angular/core";
import { Zapatilla } from "../models/zapatilla";

@Injectable()
export class ZapatillaService{
    /*Cargamos el array por un servicio*/
    public zapatillas: Array<Zapatilla>

    /*Array para cargar los talles a todos los modelos de las zapatillas*/
     public talles:number [] =[36,36.5,37,38,39,40,41,42,43,44,45,46]

    constructor(){
        this.zapatillas = [
            new Zapatilla(1,'NIKE', 'AIR-MAX', 29500, '../assets/img/nike-2.jpg',this.talles ),
            new Zapatilla(2,'PUMA', 'SHUFFLE', 24500, '../assets/img/puma-1.jpg', this.talles),
            new Zapatilla(3,'ASICS', 'GEL-NIMBU-25', 75500, '../assets/img/asics-1.jpg',this.talles ),
            new Zapatilla(4,'VANS', 'URBAN', 38100, '../assets/img/vans-1.jpg',this.talles)
          ]
          /**Este array contine cada elemento que visualizaremos en nuestra vista */
    }
    //Metodo nos devuelve el array zapatillas
    /**Que sera empleado en el OnInit de calzado */
    getZapatillas(): Array<Zapatilla>{
        return this.zapatillas
    }

      //Esta función tiene como objetivo buscar una zapatilla específica 
    //en la lista de zapatillas (this.zapatillas) basándose en su identificador (zapatillaId).
    getZapatillaById(zapatillaId: number): Zapatilla | undefined {
        return this.zapatillas.find(zapatilla => zapatilla.id === zapatillaId);
    }
}