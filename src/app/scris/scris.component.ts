import { Component } from '@angular/core';

interface Item {
  imageSrc: string;
  imageAlt: string;
}

@Component({
  selector: 'app-scris',
  templateUrl: './scris.component.html',
  styleUrls: ['./scris.component.scss']
})
export class ScrisComponent {
  data: Item[] = [
    {
      imageSrc: "../../assets/scris/1.jpg", 
      imageAlt: "Photo 1"
    },
    {
      imageSrc: "../../assets/scris/2.jpg", 
      imageAlt: "Photo 2"
    },
    {
      imageSrc: "../../assets/scris/3.jpg", 
      imageAlt: "Photo 3"
    },
    {
      imageSrc: "../../assets/scris/4.jpg", 
      imageAlt: "Photo 4"
    },
    {
      imageSrc: "../../assets/scris/5.jpg", 
      imageAlt: "Photo 5"
    },
    {
      imageSrc: "../../assets/scris/6.jpg", 
      imageAlt: "Photo 6"
    },
    {
      imageSrc: "../../assets/scris/7.jpg", 
      imageAlt: "Photo 7"
    },
    {
      imageSrc: "../../assets/scris/8.jpg", 
      imageAlt: "Photo 8"
    },
    {
      imageSrc: "../../assets/scris/9.jpg", 
      imageAlt: "Photo 9"
    },
    {
      imageSrc: "../../assets/scris/10.jpg", 
      imageAlt: "Photo 10"
    },
    {
      imageSrc: "../../assets/scris/11.jpg", 
      imageAlt: "Photo 11"
    },
    {
      imageSrc: "../../assets/scris/12.jpg", 
      imageAlt: "Photo 12"
    },
    {
      imageSrc: "../../assets/scris/13.jpg", 
      imageAlt: "Photo 13"
    },
    {
      imageSrc: "../../assets/scris/14.jpg", 
      imageAlt: "Photo 14"
    },
    {
      imageSrc: "../../assets/scris/15.jpg", 
      imageAlt: "Photo 15"
    },
    {
      imageSrc: "../../assets/scris/16.jpg", 
      imageAlt: "Photo 16"
    },
    {
      imageSrc: "../../assets/scris/17.jpg", 
      imageAlt: "Photo 17"
    },
    {
      imageSrc: "../../assets/scris/18.jpg", 
      imageAlt: "Photo 18"
    },
    {
      imageSrc: "../../assets/scris/19.jpg", 
      imageAlt: "Photo 19"
    },
    {
      imageSrc: "../../assets/scris/20.jpg", 
      imageAlt: "Photo 20"
    },
  ];
}
