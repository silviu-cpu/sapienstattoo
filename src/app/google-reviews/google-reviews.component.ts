import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-google-reviews',
  templateUrl: './google-reviews.component.html',
  styleUrls: ['./google-reviews.component.scss']
})
export class GoogleReviewsComponent {
  reviews: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit():void {
    const serverEndpoint = 'http://localhost:3000/fetch-google-reviews'; // Replace with your server's URL

    this.http.get(serverEndpoint).subscribe(
      (data: any) => {
        if (data.result && data.result.reviews) {
          this.reviews = data.result.reviews;
          console.log(data.result)
        }
      },
      (error) => {
        console.error('Error:', error);
      }
    );
    
  }
}
