import { Component } from '@angular/core';

interface Item {
  imageSrc: string;
  imageAlt: string;
}

@Component({
  selector: 'app-liniare',
  templateUrl: './liniare.component.html',
  styleUrls: ['./liniare.component.scss']
})
export class LiniareComponent {
  data: Item[] = [
    {
      imageSrc: "../../assets/Liniare/1.jpg", 
      imageAlt: "Photo 1"
    },
    {
      imageSrc: "../../assets/Liniare/2.jpg", 
      imageAlt: "Photo 2"
    },
    {
      imageSrc: "../../assets/Liniare/3.jpg", 
      imageAlt: "Photo 3"
    },
    {
      imageSrc: "../../assets/Liniare/4.jpg", 
      imageAlt: "Photo 4"
    },
    {
      imageSrc: "../../assets/Liniare/5.jpg", 
      imageAlt: "Photo 5"
    },
    {
      imageSrc: "../../assets/Liniare/6.jpg", 
      imageAlt: "Photo 6"
    },
    {
      imageSrc: "../../assets/Liniare/7.jpg", 
      imageAlt: "Photo 7"
    },
    {
      imageSrc: "../../assets/Liniare/8.jpg", 
      imageAlt: "Photo 8"
    },
    {
      imageSrc: "../../assets/Liniare/9.jpg", 
      imageAlt: "Photo 9"
    },
    {
      imageSrc: "../../assets/Liniare/10.jpg", 
      imageAlt: "Photo 10"
    },
    {
      imageSrc: "../../assets/Liniare/11.jpg", 
      imageAlt: "Photo 11"
    },
    {
      imageSrc: "../../assets/Liniare/12.jpg", 
      imageAlt: "Photo 12"
    },
    {
      imageSrc: "../../assets/Liniare/13.jpg", 
      imageAlt: "Photo 13"
    },
    {
      imageSrc: "../../assets/Liniare/14.jpg", 
      imageAlt: "Photo 14"
    },
    {
      imageSrc: "../../assets/Liniare/15.jpg", 
      imageAlt: "Photo 15"
    },
    {
      imageSrc: "../../assets/Liniare/16.jpg", 
      imageAlt: "Photo 16"
    },
    {
      imageSrc: "../../assets/Liniare/17.jpg", 
      imageAlt: "Photo 17"
    },
    {
      imageSrc: "../../assets/Liniare/18.jpg", 
      imageAlt: "Photo 18"
    },
    {
      imageSrc: "../../assets/Liniare/19.jpg", 
      imageAlt: "Photo 19"
    },
    {
      imageSrc: "../../assets/Liniare/20.jpg", 
      imageAlt: "Photo 20"
    },
    {
      imageSrc: "../../assets/Liniare/21.jpg", 
      imageAlt: "Photo 21"
    }
  ];
}
