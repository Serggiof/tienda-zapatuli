import { Component } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {

  realizarPago(): void {
    // Agrega aquí la lógica para procesar el pago
    // Puedes utilizar una pasarela de pago externa o realizar cualquier otra acción necesaria
    alert('Pago realizado');
  }
}
