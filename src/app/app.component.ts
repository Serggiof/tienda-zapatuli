interface Tarjeta{
  marca: string,
  modelo: string,
  imagenes?: string 
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 
  title = 'tienda-zapatuli';


  ngOnInit(): void {
    
  }
  
}
