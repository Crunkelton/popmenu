import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { MenuItemFormComponent } from './components/menu-item-form/menu-item-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { ReactiveFormsModule } from '@angular/forms';
import { MenuItemManagementComponent } from './components/menu-item-management/menu-item-management.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { SureCheckModule } from '../shared/sure-check/sure-check.module';
import { EditableComponent } from './components/editable/editable.component';
import { ViewModeDirective } from './directives/view-mode.directive';
import { EditModeDirective } from './directives/edit-mode.directive';
import { EditableOnEnterDirective } from './directives/editable-on-enter.directive';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { EditableOnEscapeDirective } from './directives/editable-on-escape.directive';
import { MenuItemCardModule } from '../shared/components/menu-item-card/menu-item-card.module';


@NgModule({
  declarations: [
    AdminComponent,
    MenuItemFormComponent,
    MenuItemManagementComponent,
    EditableComponent,
    ViewModeDirective,
    EditModeDirective,
    EditableOnEnterDirective,
    EditableOnEscapeDirective
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    CurrencyMaskModule,
    ReactiveFormsModule,
    MatProgressBarModule,
    MatDialogModule,
    SureCheckModule,
    MatSnackBarModule,
    MenuItemCardModule
  ]
})
export class AdminModule { }
