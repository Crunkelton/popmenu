import { RouterModule, Routes } from '@angular/router';
import { MenuLandingComponent } from './menu-landing/menu-landing.component';
import { NgModule } from '@angular/core';
import { MenuResolver } from '../resolvers/menu-resolver';

const routes: Routes = [
  {
    path: '',
    component: MenuLandingComponent,
    resolve: {
      menus: MenuResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
