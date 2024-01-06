import { Component } from '@angular/core';

interface Item {
  imageSrc: string;
  imageAlt: string;
}

@Component({
  selector: 'app-portret',
  templateUrl: './portret.component.html',
  styleUrls: ['./portret.component.scss']
})
export class PortretComponent {
  data: Item[] = [
    {
      imageSrc: "../../assets/Portret/1.jpg", 
      imageAlt: "Photo 1"
    },
    {
      imageSrc: "../../assets/Portret/2.jpg", 
      imageAlt: "Photo 2"
    },
    {
      imageSrc: "../../assets/Portret/3.jpg", 
      imageAlt: "Photo 3"
    },
    {
      imageSrc: "../../assets/Portret/4.jpg", 
      imageAlt: "Photo 4"
    },
    {
      imageSrc: "../../assets/Portret/5.jpg", 
      imageAlt: "Photo 5"
    },
    {
      imageSrc: "../../assets/Portret/6.jpg", 
      imageAlt: "Photo 6"
    },
    {
      imageSrc: "../../assets/Portret/7.jpg", 
      imageAlt: "Photo 7"
    },
    {
      imageSrc: "../../assets/Portret/8.jpg", 
      imageAlt: "Photo 8"
    },
    {
      imageSrc: "../../assets/Portret/9.jpg", 
      imageAlt: "Photo 9"
    },
    {
      imageSrc: "../../assets/Portret/10.jpg", 
      imageAlt: "Photo 10"
    },
    {
      imageSrc: "../../assets/Portret/11.jpg", 
      imageAlt: "Photo 11"
    },
    {
      imageSrc: "../../assets/Portret/12.jpg", 
      imageAlt: "Photo 12"
    },
    {
      imageSrc: "../../assets/Portret/13.jpg", 
      imageAlt: "Photo 13"
    },
    {
      imageSrc: "../../assets/Portret/14.jpg", 
      imageAlt: "Photo 14"
    },
    {
      imageSrc: "../../assets/Portret/15.jpg", 
      imageAlt: "Photo 15"
    },
    {
      imageSrc: "../../assets/Portret/16.jpg", 
      imageAlt: "Photo 16"
    },
    {
      imageSrc: "../../assets/Portret/17.jpg", 
      imageAlt: "Photo 17"
    },
    {
      imageSrc: "../../assets/Portret/18.jpg", 
      imageAlt: "Photo 18"
    }
  ];
}
