import { Component } from '@angular/core';
import { AnalyticsService } from '../google-analytics.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor (private analyticsService: AnalyticsService) {

  }

  ngOnInit() {
    this.analyticsService.trackEvent('Home Componenet loaded', 'Loaded into View' ,'Description');
  }
}
