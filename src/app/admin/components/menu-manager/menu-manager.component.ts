import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../../services/menu.service';
import { Menu } from '../../../models/menu';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuItem } from '../../../models/menu-item';

@Component({
  selector: 'app-menu-manager',
  templateUrl: './menu-manager.component.html',
  styleUrls: ['./menu-manager.component.sass']
})
export class MenuManagerComponent implements OnInit {
  title = 'Manage Menu';
  menus: Menu[];
  controls: FormArray;
  selected: Menu

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
        const menuItems: FormGroup[] = [];
        // menu.items.forEach(x => {
        //   menuItems.push(this.formBuilder.group({
        //     id: [x.id, Validators.required],
        //     menuId: [x.menuId, Validators.required],
        //     image: [x.image, [Validators.required, CustomValidators.url]],
        //     title: [x.title, Validators.required],
        //     description: [x.description, Validators.required],
        //     price: [x.price, [Validators.required, Validators.min(0)]]
        //   }));
        // });

        return new FormGroup({
          id: new FormControl(menu.id, Validators.required),
          name: new FormControl(menu.name, Validators.required),
          items: new FormControl(menu.items, Validators.required),
        });
      });
      this.controls = new FormArray(toGroups);
    });
  }

  selectMenu(menu: Menu): void {
    this.selected = menu;
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
}
