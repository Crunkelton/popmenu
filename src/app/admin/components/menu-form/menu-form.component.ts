import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MenuService } from '../../../services/menu.service';
import { CustomValidators } from 'ng2-validation';
import { MenuItem } from '../../../models/menu-item';
import { Menu } from '../../../models/menu';

@Component({
  selector: 'app-menu-form',
  templateUrl: './menu-form.component.html',
  styleUrls: ['./menu-form.component.sass']
})
export class MenuFormComponent implements OnInit {
  @Input() menu;
  menuForm: FormGroup;
  @Output() onSave: EventEmitter<any> = new EventEmitter();

  constructor(
    private formBuilder: FormBuilder,
    private menuService: MenuService
  ) { }

  ngOnInit(): void {
    this.menuForm = this.formBuilder.group({
      id: [0, Validators.required],
      name: ['', Validators.required],
      lastEditDate: [null]
    });
  }

  setMenu(item: Menu): void {
    this.menuForm.reset();
    if (item != null) {
      this.menuForm.patchValue(item);
    }
  }

  onSubmit(): void {
    const menu: Menu = this.menuForm.value;
    console.log(menu);

    if (menu.id === 0) {
      this.menuService.createMenu(menu).subscribe(() => {
        this.onSave.emit(this.menu);
      });
    } else {
      this.menuService.editMenu(menu)
        .subscribe(() => {
          this.onSave.emit(this.menu);
        });
    }
  }

}
