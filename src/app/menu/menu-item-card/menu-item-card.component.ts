import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from '../../models/menu-item';

@Component({
  selector: 'app-menu-item-card',
  templateUrl: './menu-item-card.component.html',
  styleUrls: ['./menu-item-card.component.sass']
})
export class MenuItemCardComponent implements OnInit {
  @Input() menuItem: MenuItem;

  constructor() { }

  ngOnInit(): void {
  }

}
