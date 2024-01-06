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
      imageSrc: "../../assets/BlackAndGray/1.jpg", 
      imageAlt: "Photo 1"
    },
    {
      imageSrc: "../../assets/BlackAndGray/3.jpg", 
      imageAlt: "Photo 3"
    },
    {
      imageSrc: "../../assets/BlackAndGray/4.jpg", 
      imageAlt: "Photo 4"
    },
    {
      imageSrc: "../../assets/BlackAndGray/5.jpg", 
      imageAlt: "Photo 5"
    },
    {
      imageSrc: "../../assets/BlackAndGray/6.jpg", 
      imageAlt: "Photo 6"
    },
    {
      imageSrc: "../../assets/BlackAndGray/7.jpg", 
      imageAlt: "Photo 7"
    },
    {
      imageSrc: "../../assets/BlackAndGray/8.jpg", 
      imageAlt: "Photo 8"
    },
    {
      imageSrc: "../../assets/BlackAndGray/9.jpg", 
      imageAlt: "Photo 9"
    },
    {
      imageSrc: "../../assets/BlackAndGray/10.jpg", 
      imageAlt: "Photo 10"
    },
    {
      imageSrc: "../../assets/BlackAndGray/11.jpg", 
      imageAlt: "Photo 11"
    },
    {
      imageSrc: "../../assets/BlackAndGray/12.jpg", 
      imageAlt: "Photo 12"
    },
    {
      imageSrc: "../../assets/BlackAndGray/13.jpg", 
      imageAlt: "Photo 13"
    },
    {
      imageSrc: "../../assets/BlackAndGray/14.jpg", 
      imageAlt: "Photo 14"
    },
    {
      imageSrc: "../../assets/BlackAndGray/15.jpg", 
      imageAlt: "Photo 15"
    },
    {
      imageSrc: "../../assets/BlackAndGray/16.jpg", 
      imageAlt: "Photo 16"
    },
    {
      imageSrc: "../../assets/BlackAndGray/17.jpg", 
      imageAlt: "Photo 17"
    },
    {
      imageSrc: "../../assets/BlackAndGray/18.jpg", 
      imageAlt: "Photo 18"
    },
    {
      imageSrc: "../../assets/BlackAndGray/19.jpg", 
      imageAlt: "Photo 19"
    },
    {
      imageSrc: "../../assets/BlackAndGray/20.jpg", 
      imageAlt: "Photo 20"
    },
    {
      imageSrc: "../../assets/BlackAndGray/21.jpg", 
      imageAlt: "Photo 21"
    },
    {
      imageSrc: "../../assets/BlackAndGray/22.jpg", 
      imageAlt: "Photo 22"
    },
    {
      imageSrc: "../../assets/BlackAndGray/23.jpg", 
      imageAlt: "Photo 23"
    },
    {
      imageSrc: "../../assets/BlackAndGray/24.jpg", 
      imageAlt: "Photo 24"
    },
    {
      imageSrc: "../../assets/BlackAndGray/25.jpg", 
      imageAlt: "Photo 25"
    },
    {
      imageSrc: "../../assets/BlackAndGray/26.jpg", 
      imageAlt: "Photo 26"
    },
    {
      imageSrc: "../../assets/BlackAndGray/27.jpg", 
      imageAlt: "Photo 27"
    },
    {
      imageSrc: "../../assets/BlackAndGray/28.jpg", 
      imageAlt: "Photo 28"
    }
  ];
}
