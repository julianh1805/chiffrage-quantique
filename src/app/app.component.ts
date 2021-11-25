import {Component, OnInit} from '@angular/core';
import { Router, NavigationStart, Event as NavigationEvent } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'crypto-quantique';
  currentRoute;

  constructor(private router: Router) {

    this.router.events
      .subscribe(
        (event: NavigationEvent) => {
          if (event instanceof NavigationStart) {
            this.currentRoute = event.url;
          }
        });
  }

}
