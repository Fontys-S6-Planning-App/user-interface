import {Component, OnInit} from '@angular/core';
import {NavigationStart, Router} from '@angular/router';

declare global {
  // tslint:disable-next-line:ban-types
  interface Window { strum: Function; }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'user-interface';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        window.strum('routeChange', event.url);
      }
    });
  }
}
