import { Component } from '@angular/core';

interface Item {
  imageSrc: string;
  imageAlt: string;
}

@Component({
  selector: 'app-sketch',
  templateUrl: './sketch.component.html',
  styleUrls: ['./sketch.component.scss']
})
export class SketchComponent {
  data: Item[] = [
    {
      imageSrc: "../../assets/Sketch/1.jpg", 
      imageAlt: "Photo 1"
    },
    {
      imageSrc: "../../assets/Sketch/2.jpg", 
      imageAlt: "Photo 2"
    },
    {
      imageSrc: "../../assets/Sketch/3.jpg", 
      imageAlt: "Photo 3"
    },
    {
      imageSrc: "../../assets/Sketch/4.jpg", 
      imageAlt: "Photo 4"
    },
    {
      imageSrc: "../../assets/Sketch/5.jpg", 
      imageAlt: "Photo 5"
    },
    {
      imageSrc: "../../assets/Sketch/6.jpg", 
      imageAlt: "Photo 6"
    },
    {
      imageSrc: "../../assets/Sketch/7.jpg", 
      imageAlt: "Photo 7"
    },
    {
      imageSrc: "../../assets/Sketch/8.jpg", 
      imageAlt: "Photo 8"
    },
    {
      imageSrc: "../../assets/Sketch/9.jpg", 
      imageAlt: "Photo 9"
    },
    {
      imageSrc: "../../assets/Sketch/10.jpg", 
      imageAlt: "Photo 10"
    },
    {
      imageSrc: "../../assets/Sketch/11.jpg", 
      imageAlt: "Photo 11"
    },
    {
      imageSrc: "../../assets/Sketch/12.jpg", 
      imageAlt: "Photo 12"
    },
    {
      imageSrc: "../../assets/Sketch/13.jpg", 
      imageAlt: "Photo 13"
    },
    {
      imageSrc: "../../assets/Sketch/14.jpg", 
      imageAlt: "Photo 14"
    },
    {
      imageSrc: "../../assets/Sketch/15.jpg", 
      imageAlt: "Photo 15"
    }
  ];
}
