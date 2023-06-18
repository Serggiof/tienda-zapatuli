import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './zapatuli/header/header.component';

import { HomeComponent } from './zapatuli/home/home.component';
import { CarritoComponent } from './zapatuli/carrito/carrito.component';
import { CalzadoComponent } from './zapatuli/calzado/calzado.component';
import { CarritoService } from './zapatuli/servicios/carrito.service';
import { ContactoComponent } from './zapatuli/contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CarritoComponent,
    CalzadoComponent,
    ContactoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [CarritoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
