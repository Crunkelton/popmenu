import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FloatLabelType } from '@angular/material/form-field/form-field';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MenuItem } from '../../../models/menu-item';
import { CustomValidators } from 'ng2-validation';
import { MenuService } from '../../../services/menu.service';

@Component({
  selector: 'app-menu-item-form',
  templateUrl: './menu-item-form.component.html',
  styleUrls: ['./menu-item-form.component.sass']
})
export class MenuItemFormComponent implements OnInit {
  @Input() menuItem;
  menuItemForm: FormGroup;
  @Output() onSave: EventEmitter<any> = new EventEmitter();

  constructor(
    private formBuilder: FormBuilder,
    private menuService: MenuService
  ) { }

  ngOnInit(): void {
    this.menuItemForm = this.formBuilder.group({
      id: [0, Validators.required],
      menuId: [0, Validators.required],
      image: [null, [Validators.required, CustomValidators.url]],
      title: [null, Validators.required],
      description: [null, Validators.required],
      price: [0, [Validators.required, Validators.min(0)]]
    });
  }

  setItem(item: MenuItem): void {
    this.menuItemForm.reset();
    if (item != null) {
      this.menuItemForm.patchValue(item);
    }
  }

  onSubmit(): void {
    const item: MenuItem = this.menuItemForm.value;

    if (item.id === 0) {
      this.menuService.createMenuItem(item).subscribe(() => {
        this.onSave.emit(this.menuItemForm.value);
      });
    } else {
      this.menuService.editMenuItem(item)
        .subscribe(() => {
          this.onSave.emit(this.menuItemForm.value);
        });
    }
  }

}
