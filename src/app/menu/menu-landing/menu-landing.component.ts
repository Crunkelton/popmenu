import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { MenuItem } from '../../models/menu-item';
import { Menu } from '../../models/menu';

@Component({
  selector: 'app-menu-landing',
  templateUrl: './menu-landing.component.html',
  styleUrls: ['./menu-landing.component.sass']
})
export class MenuLandingComponent implements OnInit {
  menu: Menu;
  menuItems: MenuItem[];

  constructor(
    private menuService: MenuService
  ) { }

  ngOnInit(): void {
    this.menuService.getMenus().subscribe((resp: Menu[]) => {
      this.menu = resp[0];
      this.menuService.getMenuItems(this.menu.id)
        .subscribe((response: MenuItem[]) => this.menuItems = response);
    });
  }

}
