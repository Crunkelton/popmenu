import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { MenuItemFormComponent } from './components/menu-item-form/menu-item-form.component';

const routes: Routes = [
  {
    path: '', component: AdminComponent
  },
  {
    path: 'menu-item', component: MenuItemFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
