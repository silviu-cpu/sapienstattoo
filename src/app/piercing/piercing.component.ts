import { Component } from '@angular/core';

interface Item {
  imageSrc: string;
  imageAlt: string;
}

interface Piercing {
  type: string;
  price: string;
}

@Component({
  selector: 'app-piercing',
  templateUrl: './piercing.component.html',
  styleUrls: ['./piercing.component.scss']
})

export class PiercingComponent {
  data: Item[] = [
    {
      imageSrc: "../../assets/Piercing/1.png", 
      imageAlt: "Photo 1"
    },
    {
      imageSrc: "../../assets/Piercing/2.png", 
      imageAlt: "Photo 2"
    },
    {
      imageSrc: "../../assets/Piercing/3.png", 
      imageAlt: "Photo 3"
    },
    {
      imageSrc: "../../assets/Piercing/4.png", 
      imageAlt: "Photo 4"
    },
    {
      imageSrc: "../../assets/Piercing/5.png", 
      imageAlt: "Photo 5"
    },
    {
      imageSrc: "../../assets/Piercing/6.png", 
      imageAlt: "Photo 6"
    },
    {
      imageSrc: "../../assets/Piercing/7.png", 
      imageAlt: "Photo 7"
    },
    {
      imageSrc: "../../assets/Piercing/8.png", 
      imageAlt: "Photo 8"
    },
    {
      imageSrc: "../../assets/Piercing/9.png", 
      imageAlt: "Photo 9"
    },
    {
      imageSrc: "../../assets/Piercing/10.png", 
      imageAlt: "Photo 10"
    },
    {
      imageSrc: "../../assets/Piercing/11.png", 
      imageAlt: "Photo 11"
    },
    {
      imageSrc: "../../assets/Piercing/12.png", 
      imageAlt: "Photo 12"
    },
    {
      imageSrc: "../../assets/Piercing/13.png", 
      imageAlt: "Photo 13"
    },
    {
      imageSrc: "../../assets/Piercing/14.png", 
      imageAlt: "Photo 14"
    },
    {
      imageSrc: "../../assets/Piercing/15.png", 
      imageAlt: "Photo 15"
    },
    {
      imageSrc: "../../assets/Piercing/16.png", 
      imageAlt: "Photo 16"
    },
    {
      imageSrc: "../../assets/Piercing/17.png", 
      imageAlt: "Photo 17"
    },
    {
      imageSrc: "../../assets/Piercing/18.png", 
      imageAlt: "Photo 18"
    },
    {
      imageSrc: "../../assets/Piercing/19.png", 
      imageAlt: "Photo 19"
    },
    {
      imageSrc: "../../assets/Piercing/20.png", 
      imageAlt: "Photo 20"
    },
    {
      imageSrc: "../../assets/Piercing/21.png", 
      imageAlt: "Photo 21"
    },
    {
      imageSrc: "../../assets/Piercing/22.png", 
      imageAlt: "Photo 22"
    },
    {
      imageSrc: "../../assets/Piercing/23.png", 
      imageAlt: "Photo 23"
    },
    {
      imageSrc: "../../assets/Piercing/24.png", 
      imageAlt: "Photo 24"
    },
    {
      imageSrc: "../../assets/Piercing/25.png", 
      imageAlt: "Photo 25"
    },
    {
      imageSrc: "../../assets/Piercing/26.png", 
      imageAlt: "Photo 26"
    },
    {
      imageSrc: "../../assets/Piercing/27.png", 
      imageAlt: "Photo 27"
    },
    {
      imageSrc: "../../assets/Piercing/28.png", 
      imageAlt: "Photo 28"
    },
    {
      imageSrc: "../../assets/Piercing/24.png", 
      imageAlt: "Photo 29"
    },
    {
      imageSrc: "../../assets/Piercing/25.png", 
      imageAlt: "Photo 30"
    },
    {
      imageSrc: "../../assets/Piercing/26.png", 
      imageAlt: "Photo 31"
    },
    {
      imageSrc: "../../assets/Piercing/27.png", 
      imageAlt: "Photo 32"
    },
    {
      imageSrc: "../../assets/Piercing/28.png", 
      imageAlt: "Photo 33"
    },{
      imageSrc: "../../assets/Piercing/24.png", 
      imageAlt: "Photo 34"
    },
    {
      imageSrc: "../../assets/Piercing/25.png", 
      imageAlt: "Photo 35"
    },
    {
      imageSrc: "../../assets/Piercing/26.png", 
      imageAlt: "Photo 36"
    },
    {
      imageSrc: "../../assets/Piercing/27.png", 
      imageAlt: "Photo 37"
    },
    {
      imageSrc: "../../assets/Piercing/28.png", 
      imageAlt: "Photo 38"
    },
    {
      imageSrc: "../../assets/Piercing/24.png", 
      imageAlt: "Photo 39"
    },
    {
      imageSrc: "../../assets/Piercing/25.png", 
      imageAlt: "Photo 40"
    },
    {
      imageSrc: "../../assets/Piercing/26.png", 
      imageAlt: "Photo 41"
    },
    {
      imageSrc: "../../assets/Piercing/27.png", 
      imageAlt: "Photo 42"
    },
    {
      imageSrc: "../../assets/Piercing/28.png", 
      imageAlt: "Photo 43"
    },
    {
      imageSrc: "../../assets/Piercing/24.png", 
      imageAlt: "Photo 44"
    },
    {
      imageSrc: "../../assets/Piercing/25.png", 
      imageAlt: "Photo 45"
    }
  ];
  piercings: Piercing[] = [
    { type: 'Piercing Lob', price: '100 Ron' },
    { type: 'Piercing Helix cartilaj', price: '130 Ron' },
    { type: 'Piercing Conch', price: '140 Ron' },
    { type: 'Piercing Tragus', price: '140 Ron' },
    { type: 'Piercing Anti-Tragus', price: '140 Ron' },
    { type: 'Piercing Industrial', price: '150 Ron' },
    { type: 'Piercing Snug', price: '140 Ron' },
    { type: 'Piercing Rook', price: '150 Ron' },
    { type: 'Piercing Flat', price: '150 Ron' },
    { type: 'Piercing Nas', price: '140 Ron' },
    { type: 'Piercing Septum', price: '150 Ron' },
    { type: 'Piercing Sprânceană', price: '140 Ron' },
    { type: 'Piercing Buză', price: '150 Ron' },
    { type: 'Piercing Limbă', price: '150 Ron' },
    { type: 'Piercing Smiley', price: '150 Ron' },
    { type: 'Piercing Buric', price: '150 Ron' },
    { type: 'Piercing Sfârc', price: '160 Ron' },
    { type: 'Schimbare, Verificare, Curățare Piercing', price: '30 Ron' }
  ];
}
