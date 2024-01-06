import { Component } from '@angular/core';

interface Item {
  imageSrc: string;
  imageAlt: string;
}

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss']
})
export class MatchComponent {
  data: Item[] = [
    {
      imageSrc: "../../assets/Match/1.jpg", 
      imageAlt: "Photo 1"
    },
    {
      imageSrc: "../../assets/Match/2.jpg", 
      imageAlt: "Photo 2"
    },
    {
      imageSrc: "../../assets/Match/3.jpg", 
      imageAlt: "Photo 3"
    },
    {
      imageSrc: "../../assets/Match/4.jpg", 
      imageAlt: "Photo 4"
    },
    {
      imageSrc: "../../assets/Match/5.jpg", 
      imageAlt: "Photo 5"
    },
    {
      imageSrc: "../../assets/Match/6.jpg", 
      imageAlt: "Photo 6"
    },
    {
      imageSrc: "../../assets/Match/7.jpg", 
      imageAlt: "Photo 7"
    },
    {
      imageSrc: "../../assets/Match/8.jpg", 
      imageAlt: "Photo 8"
    },
    {
      imageSrc: "../../assets/Match/9.jpg", 
      imageAlt: "Photo 9"
    },
    {
      imageSrc: "../../assets/Match/10.jpg", 
      imageAlt: "Photo 10"
    },
    {
      imageSrc: "../../assets/Match/11.jpg", 
      imageAlt: "Photo 11"
    },
    {
      imageSrc: "../../assets/Match/12.jpg", 
      imageAlt: "Photo 12"
    },
    {
      imageSrc: "../../assets/Match/13.jpg", 
      imageAlt: "Photo 13"
    },
    {
      imageSrc: "../../assets/Match/14.jpg", 
      imageAlt: "Photo 14"
    },
    {
      imageSrc: "../../assets/Match/15.jpg", 
      imageAlt: "Photo 15"
    },
    {
      imageSrc: "../../assets/Match/16.jpg", 
      imageAlt: "Photo 16"
    }
  ];
}
