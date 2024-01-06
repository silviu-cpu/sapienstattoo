import { Component } from '@angular/core';

interface Item {
  imageSrc: string;
  imageAlt: string;
}

@Component({
  selector: 'app-tatuaje-mici',
  templateUrl: './tatuaje-mici.component.html',
  styleUrls: ['./tatuaje-mici.component.scss']
})

export class TatuajeMiciComponent {

  data: Item[] = [
    {
      imageSrc: "../../assets/Mici/1.jpg", 
      imageAlt: "Photo 1"
    },
    {
      imageSrc: "../../assets/Mici/2.jpg", 
      imageAlt: "Photo 2"
    },
    {
      imageSrc: "../../assets/Mici/3.jpg", 
      imageAlt: "Photo 3"
    },
    {
      imageSrc: "../../assets/Mici/4.jpg", 
      imageAlt: "Photo 4"
    },
    {
      imageSrc: "../../assets/Mici/5.jpg", 
      imageAlt: "Photo 5"
    },
    {
      imageSrc: "../../assets/Mici/6.jpg", 
      imageAlt: "Photo 6"
    },
    {
      imageSrc: "../../assets/Mici/7.jpg", 
      imageAlt: "Photo 7"
    },
    {
      imageSrc: "../../assets/Mici/8.jpg", 
      imageAlt: "Photo 8"
    },
    {
      imageSrc: "../../assets/Mici/9.jpg", 
      imageAlt: "Photo 9"
    },
    {
      imageSrc: "../../assets/Mici/10.jpg", 
      imageAlt: "Photo 10"
    },
  ];
}

