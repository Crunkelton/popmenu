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


@NgModule({
  declarations: [AdminComponent, MenuItemFormComponent, MenuItemManagementComponent],
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
    SureCheckModule
  ]
})
export class AdminModule { }
