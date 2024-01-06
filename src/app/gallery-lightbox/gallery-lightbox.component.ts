import {
  animate,
  style,
  transition,
  trigger,
  AnimationEvent,
} from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

interface Item {
  imageSrc: string;
  imageAlt: string;
}

@Component({
  selector: 'app-gallery-lightbox',
  templateUrl: './gallery-lightbox.component.html',
  styleUrls: ['./gallery-lightbox.component.scss'],
  animations: [
    trigger('animation', [
      transition('void => visible', [
        style({ transform: 'scale(0.5)' }),
        animate('150ms', style({ transform: 'scale(1)' })),
      ]),
      transition('visible => void', [
        style({ transform: 'scale(1)' }),
        animate('150ms', style({ transform: 'scale(0.5)' })),
      ]),
    ]),
    trigger('animation2', [
      transition(':leave',[
        style({opacity:1}),
        animate('100ms', style({opacity: 0.8}))
      ])
    ])
  ],
})
export class GalleryLightboxComponent implements OnInit {
  @Input() galleryData: Item[] = [];
  @Input() showCount: boolean = false;

  previewImage: boolean = false;
  showMask: boolean = false;
  currentLightboxImage: Item = this.galleryData[0];
  currentIndex: number = 0;
  controls: boolean = true;
  totalImageCount: number = 0;

  ngOnInit(): void {
    this.totalImageCount = this.galleryData.length;
  }

  onPreviewImage(index: number): void {
    this.showMask = true;
    this.previewImage = true;
    this.currentIndex = index;
    this.currentLightboxImage = this.galleryData[index];
  }

  onAnimationEnd(event: AnimationEvent): void {
    if (event.toState === 'void') {
      this.showMask = false;
    }
  }

  onClosePreview(): void {
    this.previewImage = false;
  }

  prev(): void {
    this.currentIndex = this.currentIndex - 1; 
    if(this.currentIndex < 0 ) {
      this.currentIndex = 0;
    }
    this.currentLightboxImage = this.galleryData[this.currentIndex];
  }
  
  next(): void {
    this.currentIndex = this.currentIndex + 1; 
    if(this.currentIndex > this.galleryData.length - 1) {
      this.currentIndex = 0;
    }
    this.currentLightboxImage = this.galleryData[this.currentIndex];
  }
}
