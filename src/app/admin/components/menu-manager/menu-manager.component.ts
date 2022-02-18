import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuService } from '../../../services/menu.service';
import { Menu } from '../../../models/menu';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuFormComponent } from '../menu-form/menu-form.component';

@Component({
  selector: 'app-menu-manager',
  templateUrl: './menu-manager.component.html',
  styleUrls: ['./menu-manager.component.sass']
})
export class MenuManagerComponent implements OnInit {
  title = 'Manage Menu';
  menus: Menu[];
  controls: FormArray;
  selected: Menu;
  editing: boolean;
  @ViewChild('menuForm') menuForm: MenuFormComponent;

  constructor(
    private menuService: MenuService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.menuService.getMenus().subscribe((resp: Menu[]) => {
      this.menus = resp;

      const toGroups = this.menus.map(menu => {
        return new FormGroup({
          id: new FormControl(menu.id, Validators.required),
          name: new FormControl(menu.name, Validators.required),
          lastEditDate: new FormControl(menu.lastEditDate),
        });
      });
      this.controls = new FormArray(toGroups);
    });
  }

  selectMenu(menu: Menu): void {
    this.selected = menu;
    this.menuForm.setMenu(menu);
    this.editing = true;
  }

  isSelected(menu: Menu): boolean {
    return this.selected != null && menu.id === this.selected.id;
  }

  goToMenu(): void {
    this.router.navigate(['menuitems'], { relativeTo: this.route, queryParams: { id: this.selected.id } });
  }

  getControl(index: number, field: string): any {
    return this.controls.at(index).get(field);
  }

  updateField(index: number, field: string ) {

  }

  addNew(): void { }

  edit(): void { }

  remove(): void { }

  onSave(menu: Menu): void {
    this.menuService.getMenus().subscribe((resp: Menu[]) => this.menus = resp);
  }
}
