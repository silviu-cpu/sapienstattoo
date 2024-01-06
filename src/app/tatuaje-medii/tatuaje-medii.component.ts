import { Component } from '@angular/core';

interface Item {
  imageSrc: string;
  imageAlt: string;
}

@Component({
  selector: 'app-tatuaje-medii',
  templateUrl: './tatuaje-medii.component.html',
  styleUrls: ['./tatuaje-medii.component.scss']
})
export class TatuajeMediiComponent {
  data: Item[] = [
    {
      imageSrc: "../../assets/Medii/1.jpg", 
      imageAlt: "Photo 1"
    },
    {
      imageSrc: "../../assets/Medii/3.jpg", 
      imageAlt: "Photo 3"
    },
    {
      imageSrc: "../../assets/Medii/4.jpg", 
      imageAlt: "Photo 4"
    },
    {
      imageSrc: "../../assets/Medii/5.jpg", 
      imageAlt: "Photo 5"
    },
    {
      imageSrc: "../../assets/Medii/6.jpg", 
      imageAlt: "Photo 6"
    },
    {
      imageSrc: "../../assets/Medii/7.jpg", 
      imageAlt: "Photo 7"
    },
    {
      imageSrc: "../../assets/Medii/8.jpg", 
      imageAlt: "Photo 8"
    },
    {
      imageSrc: "../../assets/Medii/9.jpg", 
      imageAlt: "Photo 9"
    },
    {
      imageSrc: "../../assets/Medii/10.jpg", 
      imageAlt: "Photo 10"
    },
    {
      imageSrc: "../../assets/Medii/11.jpg", 
      imageAlt: "Photo 11"
    },
    {
      imageSrc: "../../assets/Medii/12.jpg", 
      imageAlt: "Photo 12"
    },
    {
      imageSrc: "../../assets/Medii/13.jpg", 
      imageAlt: "Photo 13"
    },
    {
      imageSrc: "../../assets/Medii/14.jpg", 
      imageAlt: "Photo 14"
    },
    {
      imageSrc: "../../assets/Medii/15.jpg", 
      imageAlt: "Photo 15"
    },
    {
      imageSrc: "../../assets/Medii/16.jpg", 
      imageAlt: "Photo 16"
    },
    {
      imageSrc: "../../assets/Medii/17.jpg", 
      imageAlt: "Photo 17"
    },
    {
      imageSrc: "../../assets/Medii/18.jpg", 
      imageAlt: "Photo 18"
    },
    {
      imageSrc: "../../assets/Medii/19.jpg", 
      imageAlt: "Photo 19"
    },
    {
      imageSrc: "../../assets/Medii/20.jpg", 
      imageAlt: "Photo 20"
    },
    {
      imageSrc: "../../assets/Medii/21.jpg", 
      imageAlt: "Photo 21"
    }
  ];
}
