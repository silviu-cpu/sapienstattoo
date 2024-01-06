import { Component } from '@angular/core';

interface Item {
  imageSrc: string;
  imageAlt: string;
}

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.scss']
})
export class CustomComponent {
  data: Item[] = [
    {
      imageSrc: "../../assets/Custom/1.jpg", 
      imageAlt: "Photo 1"
    },
    {
      imageSrc: "../../assets/Custom/2.jpg", 
      imageAlt: "Photo 2"
    },
    {
      imageSrc: "../../assets/Custom/3.jpg", 
      imageAlt: "Photo 3"
    },
    {
      imageSrc: "../../assets/Custom/4.jpg", 
      imageAlt: "Photo 4"
    },
    {
      imageSrc: "../../assets/Custom/5.jpg", 
      imageAlt: "Photo 5"
    },
    {
      imageSrc: "../../assets/Custom/6.jpg", 
      imageAlt: "Photo 6"
    },
    {
      imageSrc: "../../assets/Custom/7.jpg", 
      imageAlt: "Photo 7"
    },
    {
      imageSrc: "../../assets/Custom/8.jpg", 
      imageAlt: "Photo 8"
    },
    {
      imageSrc: "../../assets/Custom/9.jpg", 
      imageAlt: "Photo 9"
    },
    {
      imageSrc: "../../assets/Custom/10.jpg", 
      imageAlt: "Photo 10"
    },
    {
      imageSrc: "../../assets/Custom/11.jpg", 
      imageAlt: "Photo 11"
    },
    {
      imageSrc: "../../assets/Custom/12.jpg", 
      imageAlt: "Photo 12"
    },
    {
      imageSrc: "../../assets/Custom/13.jpg", 
      imageAlt: "Photo 13"
    },
    {
      imageSrc: "../../assets/Custom/14.jpg", 
      imageAlt: "Photo 14"
    },
    {
      imageSrc: "../../assets/Custom/15.jpg", 
      imageAlt: "Photo 15"
    },
    {
      imageSrc: "../../assets/Custom/16.jpg", 
      imageAlt: "Photo 16"
    },
    {
      imageSrc: "../../assets/Custom/17.jpg", 
      imageAlt: "Photo 17"
    },
    {
      imageSrc: "../../assets/Custom/18.jpg", 
      imageAlt: "Photo 18"
    },
    {
      imageSrc: "../../assets/Custom/19.jpg", 
      imageAlt: "Photo 19"
    },
    {
      imageSrc: "../../assets/Custom/20.jpg", 
      imageAlt: "Photo 20"
    },
    {
      imageSrc: "../../assets/Custom/21.jpg", 
      imageAlt: "Photo 21"
    },
    {
      imageSrc: "../../assets/Custom/22.jpg", 
      imageAlt: "Photo 22"
    },
    {
      imageSrc: "../../assets/Custom/23.jpg", 
      imageAlt: "Photo 23"
    },
    {
      imageSrc: "../../assets/Custom/24.jpg", 
      imageAlt: "Photo 24"
    },
    {
      imageSrc: "../../assets/Custom/25.jpg", 
      imageAlt: "Photo 25"
    },

  ];
}
