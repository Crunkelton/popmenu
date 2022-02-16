import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItemCardComponent } from './menu-item-card/menu-item-card.component';
import { MatCardModule } from '@angular/material/card';
import { MenuLandingComponent } from './menu-landing/menu-landing.component';
import { MenuRoutingModule } from './menu-routing.module';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    MenuItemCardComponent,
    MenuLandingComponent
  ],
  imports: [
    CommonModule,
    MenuRoutingModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class MenuModule { }
