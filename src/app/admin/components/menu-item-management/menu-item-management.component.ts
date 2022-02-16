import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuService } from '../../../services/menu.service';
import { MenuItem } from '../../../models/menu-item';
import { MenuItemFormComponent } from '../menu-item-form/menu-item-form.component';

@Component({
  selector: 'app-menu-item-management',
  templateUrl: './menu-item-management.component.html',
  styleUrls: ['./menu-item-management.component.sass']
})
export class MenuItemManagementComponent implements OnInit {
  menuItems: MenuItem[];
  selected: MenuItem;
  @ViewChild('menuItemForm') menuItemForm: MenuItemFormComponent;

  newItem: MenuItem = { image: '', title: '', description: '', price: 0 };

  tacoSoup: MenuItem = {
    image: 'https://hips.hearstapps.com/delish/assets/17/34/1503419036-taco-soup-delish.jpg',
    title: 'Taco Soup',
    description: 'Taco soup desc',
    price: 5.99
  };

  constructor(
    private menuService: MenuService
  ) { }

  ngOnInit(): void {
    this.fetchMenuItems();
  }

  isSelected(item: MenuItem): boolean {
    return this.selected != null && item.id === this.selected.id;
  }

  fetchMenuItems(): void {
    this.menuService.getMenuItems().subscribe((x: MenuItem[]) => this.menuItems = x);
  }

  /**
   * Convince function to quickly spin up a new fake item for testing.
   */
  fakeItem(): void {
    this.addNew(this.tacoSoup);
  }

  addNew(item: MenuItem): void {
    this.menuService.getNextId().subscribe(nextId => {
      item.id = nextId;
      this.select(item);
    });
  }

  select(item: MenuItem): void {
    this.selected = item;

    this.menuItemForm.setItem(item);
  }

  onSave(item: MenuItem): void {
    this.selected = item;
    this.fetchMenuItems();
  }
}
