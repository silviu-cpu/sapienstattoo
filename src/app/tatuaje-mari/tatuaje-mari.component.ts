import { Component } from '@angular/core';

interface Item {
  imageSrc: string;
  imageAlt: string;
}

@Component({
  selector: 'app-tatuaje-mari',
  templateUrl: './tatuaje-mari.component.html',
  styleUrls: ['./tatuaje-mari.component.scss']
})
export class TatuajeMariComponent {
  ngOnInit(): void {
    window.scrollTo(0, 0); // Ensure scrolling to top
  }
  data: Item[] = [
    {
      imageSrc: "../../assets/Mari/1.jpg", 
      imageAlt: "Photo 1"
    },
    {
      imageSrc: "../../assets/Mari/2.jpg", 
      imageAlt: "Photo 2"
    },
    {
      imageSrc: "../../assets/Mari/3.jpg", 
      imageAlt: "Photo 3"
    },
    {
      imageSrc: "../../assets/Mari/4.jpg", 
      imageAlt: "Photo 4"
    },
    {
      imageSrc: "../../assets/Mari/5.jpg", 
      imageAlt: "Photo 5"
    },
    {
      imageSrc: "../../assets/Mari/6.jpg", 
      imageAlt: "Photo 6"
    },
    {
      imageSrc: "../../assets/Mari/7.jpg", 
      imageAlt: "Photo 7"
    },
    {
      imageSrc: "../../assets/Mari/8.jpg", 
      imageAlt: "Photo 8"
    },
    {
      imageSrc: "../../assets/Mari/9.jpg", 
      imageAlt: "Photo 9"
    },
    {
      imageSrc: "../../assets/Mari/10.jpg", 
      imageAlt: "Photo 10"
    },
    {
      imageSrc: "../../assets/Mari/11.jpg", 
      imageAlt: "Photo 11"
    },
    {
      imageSrc: "../../assets/Mari/12.jpg", 
      imageAlt: "Photo 12"
    },
    {
      imageSrc: "../../assets/Mari/13.jpg", 
      imageAlt: "Photo 13"
    },
    {
      imageSrc: "../../assets/Mari/14.jpg", 
      imageAlt: "Photo 14"
    },
    {
      imageSrc: "../../assets/Mari/15.jpg", 
      imageAlt: "Photo 15"
    },
    {
      imageSrc: "../../assets/Mari/16.jpg", 
      imageAlt: "Photo 16"
    },
    {
      imageSrc: "../../assets/Mari/17.jpg", 
      imageAlt: "Photo 17"
    },
    {
      imageSrc: "../../assets/Mari/18.jpg", 
      imageAlt: "Photo 18"
    },
    {
      imageSrc: "../../assets/Mari/19.jpg", 
      imageAlt: "Photo 19"
    },
    {
      imageSrc: "../../assets/Mari/20.jpg", 
      imageAlt: "Photo 20"
    },
    {
      imageSrc: "../../assets/Mari/21.jpg", 
      imageAlt: "Photo 21"
    },
    {
      imageSrc: "../../assets/Mari/22.jpg", 
      imageAlt: "Photo 22"
    },
    {
      imageSrc: "../../assets/Mari/23.jpg", 
      imageAlt: "Photo 23"
    },
    {
      imageSrc: "../../assets/Mari/24.jpg", 
      imageAlt: "Photo 24"
    },
    {
      imageSrc: "../../assets/Mari/25.jpg", 
      imageAlt: "Photo 25"
    },
    {
      imageSrc: "../../assets/Mari/26.jpg", 
      imageAlt: "Photo 26"
    },
    {
      imageSrc: "../../assets/Mari/27.jpg", 
      imageAlt: "Photo 27"
    },
    {
      imageSrc: "../../assets/Mari/28.jpg", 
      imageAlt: "Photo 28"
    },
    {
      imageSrc: "../../assets/Mari/29.jpg", 
      imageAlt: "Photo 29"
    },
    {
      imageSrc: "../../assets/Mari/30.jpg", 
      imageAlt: "Photo 30"
    },
    {
      imageSrc: "../../assets/Mari/31.jpg", 
      imageAlt: "Photo 31"
    },
    {
      imageSrc: "../../assets/Mari/32.jpg", 
      imageAlt: "Photo 32"
    },
    {
      imageSrc: "../../assets/Mari/33.jpg", 
      imageAlt: "Photo 33"
    },
    {
      imageSrc: "../../assets/Mari/34.jpg", 
      imageAlt: "Photo 34"
    }
  ];
}
