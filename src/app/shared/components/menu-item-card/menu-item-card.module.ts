import { NgModule } from '@angular/core';
import { MenuItemCardComponent } from './menu-item-card.component';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule
  ],
  declarations: [
    MenuItemCardComponent
  ],
  exports: [
    MenuItemCardComponent
  ]
})
export class MenuItemCardModule { }
