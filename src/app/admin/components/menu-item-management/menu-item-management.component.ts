import { Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { MenuService } from '../../../services/menu.service';
import { MenuItem } from '../../../models/menu-item';
import { MenuItemFormComponent } from '../menu-item-form/menu-item-form.component';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { SureCheckComponent } from '../../../shared/sure-check/sure-check.component';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatButtonToggleGroup } from '@angular/material/button-toggle';
import { EditableComponent } from '../editable/editable.component';
import { Menu } from '../../../models/menu';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu-item-management',
  templateUrl: './menu-item-management.component.html',
  styleUrls: ['./menu-item-management.component.sass']
})
export class MenuItemManagementComponent implements OnInit {
  menuId: number;
  menu: Menu;
  title: string;
  menuItems: MenuItem[];
  selected: MenuItem;
  editing: MenuItem;
  @ViewChild('menuItemForm') menuItemForm: MenuItemFormComponent;
  @ViewChild('mode') mode: MatButtonToggleGroup;
  @ViewChildren(EditableComponent) editableComponents: QueryList<EditableComponent>;
  http = false;
  rowEdit: number;
  controls: FormArray;


  newItem: MenuItem = { id: 0, menuId: 0, image: '', title: '', description: '', price: 0 };

  tacoSoup: MenuItem = {
    id: 0,
    menuId: 0,
    image: 'https://hips.hearstapps.com/delish/assets/17/34/1503419036-taco-soup-delish.jpg',
    title: 'Taco Soup',
    description: 'Taco soup desc',
    price: 5.99
  };

  constructor(
    private route: ActivatedRoute,
    private menuService: MenuService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      // tslint:disable-next-line:radix
      this.menuId = parseInt(params.id);

      this.menuService.getMenu(this.menuId).subscribe((resp: Menu) => {
        this.menu = resp;
        this.title = `Manage ${this.menu.name} Menu`;

        this.fetchMenuItems().subscribe(() => {
          const toGroups = this.menuItems.map(item => {
            return new FormGroup({
              id: new FormControl(item.id, Validators.required),
              menuId: new FormControl(item.menuId, Validators.required),
              title: new FormControl(item.title, Validators.required),
              description: new FormControl(item.description, Validators.required),
              price: new FormControl(item.price, Validators.required),
              image: new FormControl(item.image)
            });
          });
          this.controls = new FormArray(toGroups);
        });
      });
    });
  }

  getControl(index: number, field: string): any {
    return this.controls.at(index).get(field);
  }

  isSelected(item: MenuItem): boolean {
    return this.selected != null && item.id === this.selected.id;
  }

  fetchMenuItems(): Observable<any> {
    this.http = true;
    return this.menuService.getMenuItemsByMenuId(this.menu.id)
      .pipe(
        tap((x: MenuItem[]) => {
          this.menuItems = x;
          this.http = false;
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
    item.menuId = this.menu.id;
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
          this.openSnackBar('Menu item removed');
          this.select(null);
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

  updateField(index: number, field: string ) {
    const test = this.controls.at(index);
    const control = this.getControl(index, field);

    if (control.valid) {
      test.patchValue( { field: control.value });
      this.http = true;
      this.rowEdit = index;
      this.menuService.editMenuItem(test.value).subscribe(() => {
        this.menuItems[index] = test.value;
        this.http = false;
        this.rowEdit = null;
        this.openSnackBar('Menu item updated');
      });
    }
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, null, { duration: 1000 });
  }
}
