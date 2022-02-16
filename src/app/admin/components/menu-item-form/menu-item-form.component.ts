import { Component, OnInit } from '@angular/core';
import { FloatLabelType } from '@angular/material/form-field/form-field';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MenuItem } from '../../../models/menu-item';
import { CustomValidators } from 'ng2-validation';
import { MenuService } from '../../../services/menu.service';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-menu-item-form',
  templateUrl: './menu-item-form.component.html',
  styleUrls: ['./menu-item-form.component.sass']
})
export class MenuItemFormComponent implements OnInit {
  menuItemForm: FormGroup;

  newItem: MenuItem = { id: 0, image: '', title: '', description: '', price: 0 };

  tacoSoup: MenuItem = {
    id: 0,
    image: 'https://hips.hearstapps.com/delish/assets/17/34/1503419036-taco-soup-delish.jpg',
    title: 'Taco Soup',
    description: 'Taco soup desc',
    price: 5.99
  };

  constructor(
    private formBuilder: FormBuilder,
    private menuService: MenuService
  ) { }

  ngOnInit(): void {
    this.menuItemForm = this.formBuilder.group({
      id: [0, Validators.required],
      image: [null, [Validators.required, CustomValidators.url]],
      title: [null, Validators.required],
      description: [null, Validators.required],
      price: [0, [Validators.required, Validators.min(0)]]
    });
  }

  /**
   * Convince function to quickly spin up a new fake item for testing.
   */
  fakeItem(): void {
    this.menuService.getMenuItems().subscribe((resp: MenuItem[]) => {
      // All this getting the next Id stuff would actually be taken care of by the database Identity column
      const last = resp.sort((a, b) => (a.id < b.id) ? 1 : -1)[0];

      this.menuItemForm.patchValue(this.tacoSoup);
      this.menuItemForm.patchValue({ id: last.id + 1});
    });
  }

  onSubmit(): void {
    console.log(this.menuItemForm.value);
    this.menuService.addMenuItem(this.menuItemForm.value)
      .subscribe(() => {
        this.menuItemForm.patchValue(this.newItem);
        this.menuItemForm.markAsPristine();
      });
  }

}
