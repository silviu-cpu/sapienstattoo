import { Component } from '@angular/core';

@Component({
  selector: 'app-echipa',
  templateUrl: './echipa.component.html',
  styleUrls: ['./echipa.component.scss']
})
export class EchipaComponent {
  products: any[] = [];
  responsiveOptions: any[] = [];
  ngOnInit(): void {
    this.products = [
      {
        name: 'Omul 1',
        description: 'Tattoo Artist',
        image: 'product1.jpg',
      },
      {
        name: 'Omul 2',
        description: 'Tattoo Artist',
        image: 'product2.jpg',
      },
      {
        name: 'Omul 3',
        description: 'Tattoo Artist',
        image: 'product3.jpg',
      },
      {
        name: 'Omul 4',
        description: 'Tattoo Artist',
        image: 'product4.jpg',
      }
    ];

    this.responsiveOptions = [
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
  }

  getSeverity(status: string): string {
    switch (status) {
      case 'In Stock':
        return 'success';
      case 'Low Stock':
        return 'warning';
      case 'Out of Stock':
        return 'danger';
      default:
        return 'info';
    }
  }
}
