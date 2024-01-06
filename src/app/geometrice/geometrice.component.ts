import { Component } from '@angular/core';

interface Item {
  imageSrc: string;
  imageAlt: string;
}

@Component({
  selector: 'app-geometrice',
  templateUrl: './geometrice.component.html',
  styleUrls: ['./geometrice.component.scss']
})
export class GeometriceComponent {
  data: Item[] = [
    {
      imageSrc: "../../assets/Geometrice/1.jpg", 
      imageAlt: "Photo 1"
    },
    {
      imageSrc: "../../assets/Geometrice/2.jpg", 
      imageAlt: "Photo 2"
    },
    {
      imageSrc: "../../assets/Geometrice/3.jpg", 
      imageAlt: "Photo 3"
    },
    {
      imageSrc: "../../assets/Geometrice/4.jpg", 
      imageAlt: "Photo 4"
    },
    {
      imageSrc: "../../assets/Geometrice/5.jpg", 
      imageAlt: "Photo 5"
    },
    {
      imageSrc: "../../assets/Geometrice/6.jpg", 
      imageAlt: "Photo 6"
    },
    {
      imageSrc: "../../assets/Geometrice/7.jpg", 
      imageAlt: "Photo 7"
    },
    {
      imageSrc: "../../assets/Geometrice/8.jpg", 
      imageAlt: "Photo 8"
    },
    {
      imageSrc: "../../assets/Geometrice/9.jpg", 
      imageAlt: "Photo 9"
    },
    {
      imageSrc: "../../assets/Geometrice/10.jpg", 
      imageAlt: "Photo 10"
    },
    {
      imageSrc: "../../assets/Geometrice/11.jpg", 
      imageAlt: "Photo 11"
    },
    {
      imageSrc: "../../assets/Geometrice/12.jpg", 
      imageAlt: "Photo 12"
    },
    {
      imageSrc: "../../assets/Geometrice/13.jpg", 
      imageAlt: "Photo 13"
    },
    {
      imageSrc: "../../assets/Geometrice/14.jpg", 
      imageAlt: "Photo 14"
    },
    {
      imageSrc: "../../assets/Geometrice/15.jpg", 
      imageAlt: "Photo 15"
    },
    {
      imageSrc: "../../assets/Geometrice/16.jpg", 
      imageAlt: "Photo 16"
    }
  ];
}
