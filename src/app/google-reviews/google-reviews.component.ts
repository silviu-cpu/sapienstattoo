import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs/operators';

interface Review {
  profile_photo_url?: string;
  author_name: string;
  rating: number;
  text: string;
  relative_time_description: string;
  author_url: string;
}

@Component({
  selector: 'app-google-reviews',
  templateUrl: './google-reviews.component.html',
  styleUrls: ['./google-reviews.component.scss']
})
export class GoogleReviewsComponent {
  reviews: Review[] = [];

  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 1
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1
    }
  ];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    const serverEndpoint = 'http://localhost:3000/fetch-google-reviews';

    this.http.get(serverEndpoint).pipe(take(1)).subscribe(
      (data: any) => {
        console.log(data.reviews);
        if (data && data.reviews) {
          this.reviews = data.reviews;
        }
      },
      (error) => {
        console.error('Error:', error);
      }
    );

    console.log(this.reviews)
  }
}
