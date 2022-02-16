import { RouterModule, Routes } from '@angular/router';
import { MenuLandingComponent } from './menu-landing/menu-landing.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: MenuLandingComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
