import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './zapatuli/header/header.component';
import { ModelsComponent } from './zapatuli/models/models.component';
import { HomeComponent } from './zapatuli/home/home.component';
import { CarritoComponent } from './zapatuli/carrito/carrito.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ModelsComponent,
    HomeComponent,
    CarritoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
