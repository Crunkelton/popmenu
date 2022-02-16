import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { MenuItem } from '../../models/menu-item';

@Component({
  selector: 'app-menu-landing',
  templateUrl: './menu-landing.component.html',
  styleUrls: ['./menu-landing.component.sass']
})
export class MenuLandingComponent implements OnInit {
  menuItems: MenuItem[];

  constructor(
    private menuService: MenuService
  ) { }

  ngOnInit(): void {
    this.menuService.menuItems.subscribe(x => this.menuItems = x);
  }

}
