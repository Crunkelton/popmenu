import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { MenuItem } from '../../models/menu-item';
import { Menu } from '../../models/menu';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu-landing',
  templateUrl: './menu-landing.component.html',
  styleUrls: ['./menu-landing.component.sass']
})
export class MenuLandingComponent implements OnInit {
  menus: { menu: Menu, items: MenuItem[] };

  constructor(
    private menuService: MenuService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(routeData => {
      console.log(routeData.menus);
      this.menus = routeData.menus;
    });
  }

}
