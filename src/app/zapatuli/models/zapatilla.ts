export class Zapatilla{
    constructor(
        public id: number,
        public marca:  string,
        public modelo: string,
        public precio: number,
        public imagen: string,
        public talles: Array<number>
    ){}
}
/**Usamos una clase modelo para poder tener
 * un codigo mas limpio y asi exportarlo donde 
 * lo necesitemos
 */