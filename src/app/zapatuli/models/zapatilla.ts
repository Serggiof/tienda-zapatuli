export class Zapatilla{
    constructor(
        public marca:  string,
        public modelo: string,
        public precio: number,
        public imagen: string,
        public talles: Array<number>
    ){}
}
