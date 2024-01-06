import { Component } from '@angular/core';

interface Item {
  imageSrc: string;
  imageAlt: string;
}

@Component({
  selector: 'app-anime-cartoon',
  templateUrl: './anime-cartoon.component.html',
  styleUrls: ['./anime-cartoon.component.scss']
})
export class AnimeCartoonComponent {
  data: Item[] = [
    {
      imageSrc: "../../assets/Cartoon/1.jpg", 
      imageAlt: "Photo 1"
    },
    {
      imageSrc: "../../assets/Cartoon/2.jpg", 
      imageAlt: "Photo 2"
    },
    {
      imageSrc: "../../assets/Cartoon/3.jpg", 
      imageAlt: "Photo 3"
    },
    {
      imageSrc: "../../assets/Cartoon/4.jpg", 
      imageAlt: "Photo 4"
    },
    {
      imageSrc: "../../assets/Cartoon/5.jpg", 
      imageAlt: "Photo 5"
    },
    {
      imageSrc: "../../assets/Cartoon/6.jpg", 
      imageAlt: "Photo 6"
    },
    {
      imageSrc: "../../assets/Cartoon/7.jpg", 
      imageAlt: "Photo 7"
    },
    {
      imageSrc: "../../assets/Cartoon/8.jpg", 
      imageAlt: "Photo 8"
    },
    {
      imageSrc: "../../assets/Cartoon/9.jpg", 
      imageAlt: "Photo 9"
    },
    {
      imageSrc: "../../assets/Cartoon/10.jpg", 
      imageAlt: "Photo 10"
    },
    {
      imageSrc: "../../assets/Cartoon/11.jpg", 
      imageAlt: "Photo 11"
    },
    {
      imageSrc: "../../assets/Cartoon/12.jpg", 
      imageAlt: "Photo 12"
    },
    {
      imageSrc: "../../assets/Cartoon/13.jpg", 
      imageAlt: "Photo 13"
    },
    {
      imageSrc: "../../assets/Cartoon/14.jpg", 
      imageAlt: "Photo 14"
    },
    {
      imageSrc: "../../assets/Cartoon/15.jpg", 
      imageAlt: "Photo 15"
    },
    {
      imageSrc: "../../assets/Cartoon/16.jpg", 
      imageAlt: "Photo 16"
    },
    {
      imageSrc: "../../assets/Cartoon/17.jpg", 
      imageAlt: "Photo 17"
    },
    {
      imageSrc: "../../assets/Cartoon/18.jpg", 
      imageAlt: "Photo 18"
    },
    {
      imageSrc: "../../assets/Cartoon/19.jpg", 
      imageAlt: "Photo 19"
    },
    {
      imageSrc: "../../assets/Cartoon/20.jpg", 
      imageAlt: "Photo 20"
    },
    {
      imageSrc: "../../assets/Cartoon/21.jpg", 
      imageAlt: "Photo 21"
    },
    {
      imageSrc: "../../assets/Cartoon/22.jpg", 
      imageAlt: "Photo 22"
    },
    {
      imageSrc: "../../assets/Cartoon/23.jpg", 
      imageAlt: "Photo 23"
    },
    {
      imageSrc: "../../assets/Cartoon/24.jpg", 
      imageAlt: "Photo 24"
    },
    {
      imageSrc: "../../assets/Cartoon/25.jpg", 
      imageAlt: "Photo 25"
    },
    {
      imageSrc: "../../assets/Cartoon/26.jpg", 
      imageAlt: "Photo 26"
    },
    {
      imageSrc: "../../assets/Cartoon/27.jpg", 
      imageAlt: "Photo 27"
    },
    {
      imageSrc: "../../assets/Cartoon/28.jpg", 
      imageAlt: "Photo 28"
    },
    {
      imageSrc: "../../assets/Cartoon/29.jpg", 
      imageAlt: "Photo 29"
    }
  ];
}
