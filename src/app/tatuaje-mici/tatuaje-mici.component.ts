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
    {
      imageSrc: "../../assets/Mici/11.jpg", 
      imageAlt: "Photo 11"
    },
    {
      imageSrc: "../../assets/Mici/12.jpg", 
      imageAlt: "Photo 12"
    },
    {
      imageSrc: "../../assets/Mici/13.jpg", 
      imageAlt: "Photo 13"
    },
    {
      imageSrc: "../../assets/Mici/14.jpg", 
      imageAlt: "Photo 14"
    },
    {
      imageSrc: "../../assets/Mici/15.jpg", 
      imageAlt: "Photo 15"
    },
    {
      imageSrc: "../../assets/Mici/16.jpg", 
      imageAlt: "Photo 16"
    },
    {
      imageSrc: "../../assets/Mici/17.jpg", 
      imageAlt: "Photo 17"
    },
    {
      imageSrc: "../../assets/Mici/18.jpg", 
      imageAlt: "Photo 18"
    },
    {
      imageSrc: "../../assets/Mici/19.jpg", 
      imageAlt: "Photo 19"
    },
    {
      imageSrc: "../../assets/Mici/20.jpg", 
      imageAlt: "Photo 20"
    },
    {
      imageSrc: "../../assets/Mici/21.jpg", 
      imageAlt: "Photo 21"
    },
    {
      imageSrc: "../../assets/Mici/22.jpg", 
      imageAlt: "Photo 22"
    },
    {
      imageSrc: "../../assets/Mici/23.jpg", 
      imageAlt: "Photo 23"
    },
    {
      imageSrc: "../../assets/Mici/23.jpg", 
      imageAlt: "Photo 23"
    },
    {
      imageSrc: "../../assets/Mici/24.jpg", 
      imageAlt: "Photo 24"
    },
    {
      imageSrc: "../../assets/Mici/25.jpg", 
      imageAlt: "Photo 25"
    }
  ];
}

