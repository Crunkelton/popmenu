import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'PopMenu';
  hide = true;

  constructor(
    private router: Router
  ) { }

  toggle(): void {
    this.hide = !this.hide;
  }

  route(url: string) {
    this.toggle();
    this.router.navigate([url]);
  }
}
