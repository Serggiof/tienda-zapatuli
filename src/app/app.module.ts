import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './zapatuli/header/header.component';


import { CarritoComponent } from './zapatuli/carrito/carrito.component';
import { CalzadoComponent } from './zapatuli/calzado/calzado.component';
import { CarritoService } from './zapatuli/servicios/carrito.service';
import { ContactoComponent } from './zapatuli/contacto/contacto.component';
import { HomeComponent } from './zapatuli/home/home.component';
import { RegistroComponent } from './zapatuli/registro/registro.component';
import { DescripcionComponent } from './zapatuli/descripcion/descripcion.component';
import { ZapatillaService } from './zapatuli/servicios/zapatilla.service';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './zapatuli/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarritoComponent,
    CalzadoComponent,
    ContactoComponent,
    HomeComponent,
    RegistroComponent,
    DescripcionComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([])
  ],
  /**Cargamos atraves de los
   * providers los servicion para que sean inyectados en los
   * diferentes componentes */
  providers: [CarritoService,ZapatillaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
