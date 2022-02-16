import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuService } from '../../../services/menu.service';
import { MenuItem } from '../../../models/menu-item';
import { MenuItemFormComponent } from '../menu-item-form/menu-item-form.component';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { SureCheckComponent } from '../../../shared/sure-check/sure-check.component';

@Component({
  selector: 'app-menu-item-management',
  templateUrl: './menu-item-management.component.html',
  styleUrls: ['./menu-item-management.component.sass']
})
export class MenuItemManagementComponent implements OnInit {
  menuItems: MenuItem[];
  selected: MenuItem;
  editing: MenuItem;
  @ViewChild('menuItemForm') menuItemForm: MenuItemFormComponent;
  fetchingResults = false;

  newItem: MenuItem = { id: 0, image: '', title: '', description: '', price: 0 };

  tacoSoup: MenuItem = {
    id: 0,
    image: 'https://hips.hearstapps.com/delish/assets/17/34/1503419036-taco-soup-delish.jpg',
    title: 'Taco Soup',
    description: 'Taco soup desc',
    price: 5.99
  };

  constructor(
    private menuService: MenuService,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.fetchMenuItems().subscribe();
  }

  isSelected(item: MenuItem): boolean {
    return this.selected != null && item.id === this.selected.id;
  }

  fetchMenuItems(): Observable<any> {
    this.fetchingResults = true;
    return this.menuService.getMenuItems()
      .pipe(
        tap((x: MenuItem[]) => {
          this.menuItems = x;
          this.fetchingResults = false;
        }));
  }

  /**
   * Convince function to quickly spin up a new fake item for testing.
   */
  fakeItem(): void {
    this.addNew(this.tacoSoup);
  }

  addNew(item: MenuItem): void {
    this.selected = null;
    this.editing = item;
    this.menuItemForm.setItem(item);
  }

  remove(): void {
    const config: MatDialogConfig = {
      width: '500px',
      hasBackdrop: true,
      data: {message: 'Are you sure you want to delete this menu item?'}
    };

    const dialog = this.dialog.open(SureCheckComponent, config);

    dialog.afterClosed().subscribe(confirmation => {
      if (confirmation) {
        this.menuService.removeMenuItem(this.selected).subscribe(() => {
          this.selected = null;
          this.fetchMenuItems().subscribe();
        });
      }
    });
  }

  select(item: MenuItem): void {
    this.selected = item;
    this.editing = item;
    this.menuItemForm.setItem(item);
  }

  onSave(item: MenuItem): void {
    this.selected = item;
    this.fetchMenuItems().subscribe();
  }
}
