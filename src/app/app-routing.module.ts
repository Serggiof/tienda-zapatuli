import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarritoComponent } from './zapatuli/carrito/carrito.component';
import { HomeComponent } from './zapatuli/home/home.component';
import { CalzadoComponent } from './zapatuli/calzado/calzado.component';
import { ContactoComponent } from './zapatuli/contacto/contacto.component';

const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'home'},
  {path:'home', component:HomeComponent},
  {path:'carrito', component:CarritoComponent},
  {path:'calzado', component:CalzadoComponent},
  {path:'contacto', component: ContactoComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
