import { Component } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AtmosAQ - Basic air quality application';

  isLogin: boolean = false;

  constructor(private router: Router) {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        if (event.url === '/auth') {
          this.isLogin= true;
        } else {
          this.isLogin= false;
        }
      }
    });
  }
}
