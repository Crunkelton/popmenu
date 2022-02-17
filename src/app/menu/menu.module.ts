import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MenuLandingComponent } from './menu-landing/menu-landing.component';
import { MenuRoutingModule } from './menu-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MenuItemCardModule } from '../shared/components/menu-item-card/menu-item-card.module';

@NgModule({
  declarations: [
    MenuLandingComponent
  ],
  imports: [
    CommonModule,
    MenuRoutingModule,
    MatCardModule,
    MatButtonModule,
    MenuItemCardModule
  ]
})
export class MenuModule { }
