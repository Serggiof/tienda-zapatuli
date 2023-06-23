import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  images = [
    {
      src: '../assets/img/publicida-1.gif',
      alt: 'Descripción imagen 1'
    },
    {
      src: '../assets/img/publicida-2.gif',
      alt: 'Descripción imagen 2'
    },
    {
      src: './assets/img/publicida-3.gif',
      alt: 'Descripción imagen 3'
    }
  ];
  ngOnInit(){
    setInterval(() => {
      this.changeImage();
    }, 3000); // Cambia la imagen cada 3 segundos (ajusta el valor según tus necesidades)
  }
  
  
  currentImageIndex = 0;
  currentImage = this.images[this.currentImageIndex];

  changeImage() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    this.currentImage = this.images[this.currentImageIndex];
  }

}
