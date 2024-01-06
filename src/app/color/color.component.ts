import { Component } from '@angular/core';

interface Item {
  imageSrc: string;
  imageAlt: string;
}

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss']
})
export class ColorComponent {
  data: Item[] = [
    {
      imageSrc: "../../assets/Color/1.jpg", 
      imageAlt: "Photo 1"
    },
    {
      imageSrc: "../../assets/Color/2.jpg", 
      imageAlt: "Photo 2"
    },
    {
      imageSrc: "../../assets/Color/3.jpg", 
      imageAlt: "Photo 3"
    },
    {
      imageSrc: "../../assets/Color/4.jpg", 
      imageAlt: "Photo 4"
    },
    {
      imageSrc: "../../assets/Color/5.jpg", 
      imageAlt: "Photo 5"
    },
    {
      imageSrc: "../../assets/Color/6.jpg", 
      imageAlt: "Photo 6"
    },
    {
      imageSrc: "../../assets/Color/7.jpg", 
      imageAlt: "Photo 7"
    },
    {
      imageSrc: "../../assets/Color/8.jpg", 
      imageAlt: "Photo 8"
    },
    {
      imageSrc: "../../assets/Color/9.jpg", 
      imageAlt: "Photo 9"
    },
    {
      imageSrc: "../../assets/Color/10.jpg", 
      imageAlt: "Photo 10"
    },
    {
      imageSrc: "../../assets/Color/11.jpg", 
      imageAlt: "Photo 11"
    },
    {
      imageSrc: "../../assets/Color/12.jpg", 
      imageAlt: "Photo 12"
    },
    {
      imageSrc: "../../assets/Color/13.jpg", 
      imageAlt: "Photo 13"
    },
    {
      imageSrc: "../../assets/Color/14.jpg", 
      imageAlt: "Photo 14"
    },
    {
      imageSrc: "../../assets/Color/15.jpg", 
      imageAlt: "Photo 15"
    },
    {
      imageSrc: "../../assets/Color/16.jpg", 
      imageAlt: "Photo 16"
    },
    {
      imageSrc: "../../assets/Color/17.jpg", 
      imageAlt: "Photo 17"
    },
    {
      imageSrc: "../../assets/Color/18.jpg", 
      imageAlt: "Photo 18"
    },
    {
      imageSrc: "../../assets/Color/19.jpg", 
      imageAlt: "Photo 19"
    },
    {
      imageSrc: "../../assets/Color/20.jpg", 
      imageAlt: "Photo 20"
    },
    {
      imageSrc: "../../assets/Color/21.jpg", 
      imageAlt: "Photo 21"
    },
    {
      imageSrc: "../../assets/Color/22.jpg", 
      imageAlt: "Photo 22"
    },
    {
      imageSrc: "../../assets/Color/23.jpg", 
      imageAlt: "Photo 23"
    },
    {
      imageSrc: "../../assets/Color/24.jpg", 
      imageAlt: "Photo 24"
    },
    {
      imageSrc: "../../assets/Color/25.jpg", 
      imageAlt: "Photo 25"
    },
    {
      imageSrc: "../../assets/Color/26.jpg", 
      imageAlt: "Photo 26"
    },
    {
      imageSrc: "../../assets/Color/27.jpg", 
      imageAlt: "Photo 27"
    },
    {
      imageSrc: "../../assets/Color/28.jpg", 
      imageAlt: "Photo 28"
    }
  ];
}
