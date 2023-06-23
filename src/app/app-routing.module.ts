import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { CalzadoComponent } from './zapatuli/calzado/calzado.component';
import { ContactoComponent } from './zapatuli/contacto/contacto.component';
import { CarritoComponent } from './zapatuli/carrito/carrito.component';
import { HomeComponent } from './zapatuli/home/home.component';
import { RegistroComponent } from './zapatuli/registro/registro.component';
const routes: Routes = [

  {path: '', component: HomeComponent},// path que se muestra al inicio de la app
  {path:'home', component:HomeComponent},
  {path:'carrito', component:CarritoComponent},
  {path:'calzado', component:CalzadoComponent},
  {path:'contacto', component: ContactoComponent },
  {path: 'registro', component: RegistroComponent},
  {path: '**', component:HomeComponent } // path para la redireccion 404

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
