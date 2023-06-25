import { Injectable } from '@angular/core';
import { Subject,Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContadorService {

  private subject = new Subject<any>();

  sendNumber(number:number){
    this.subject.next({text:number});
  }

  getNumber():Observable<any>{
    return this.subject.asObservable();
  }
  /**Este metodo nos devuelve el cada seleccion para enviarla al header
   * y asi visualisamos el numero de los productos que temos en el carrito
   */
}
