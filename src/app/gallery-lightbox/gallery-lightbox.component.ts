import { Component, Input, OnInit } from '@angular/core';

interface Item {
  imageSrc: string;
  imageAlt: string;
}

@Component({
  selector: 'app-gallery-lightbox',
  templateUrl: './gallery-lightbox.component.html',
  styleUrls: ['./gallery-lightbox.component.scss']
})
export class GalleryLightboxComponent implements OnInit {
  @Input() galleryData: Item[] = [];
  @Input() showCount:boolean = false;

  previewImage:boolean = false;
  showMask:boolean = false;
  currentLightboxImage: Item = this.galleryData[0];
  currentIndex:number = 0;
  controls:boolean = true;
  totalImageCount:number = 0;

  ngOnInit(): void {
    this.totalImageCount = this.galleryData.length;
  }

  onPreviewImage(index: number): void {
    this.showMask = true;
    this.previewImage = true;
    this.currentIndex = index;
    this.currentLightboxImage = this.galleryData[index];
  }
}
