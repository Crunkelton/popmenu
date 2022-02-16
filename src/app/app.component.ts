import { Component } from '@angular/core';
import { MenuService } from './services/menu.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Popmenu';
  hide = true;

  constructor(
    private menuService: MenuService,
    private router: Router
  ) { }

  logMenuItem(): void {
    this.menuService.getMenuItems().subscribe(x => console.log(x));
  }

  toggle(): void {
    this.hide = !this.hide;
  }

  route(url: string) {
    this.toggle();
    this.router.navigate([url]);
  }
}
