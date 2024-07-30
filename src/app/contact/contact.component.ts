import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  display: any
  center: google.maps.LatLngLiteral = {lat:44.423948, lng:26.158262}
  zoom = 14
  markerPosition: google.maps.LatLngLiteral = { lat: 44.423948, lng: 26.158262 };

  moveMap(event: google.maps.MapMouseEvent) {
    if(event.latLng != null) 
    this.center = (event.latLng.toJSON())
  }

  move(event: google.maps.MapMouseEvent) {
    if(event.latLng != null) 
    this.display = (event.latLng.toJSON())
  }
  
  openWhatsApp(): void {
    window.open('https://wa.me/0732087298', '_blank');
  }
}
