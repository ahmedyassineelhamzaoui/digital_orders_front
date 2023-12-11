import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-sidbar',
  templateUrl: './sidbar.component.html',
  styleUrl: './sidbar.component.scss'
})
export class SidbarComponent {
  activeRoute: string = '';

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.activeRoute = event.url;
      }
    });
  }

  isRouteActive(route: string): boolean {
    return this.activeRoute === route;
  }
}
