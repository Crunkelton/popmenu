import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { MenuItemFormComponent } from './components/menu-item-form/menu-item-form.component';
import { MenuItemManagementComponent } from './components/menu-item-management/menu-item-management.component';
import { MenuManagerComponent } from './components/menu-manager/menu-manager.component';

const routes: Routes = [
  {
    path: '', component: AdminComponent
  },
  {
    path: 'manage', component: MenuManagerComponent,
  },
  {
    path: 'manage/menuitems', component: MenuItemManagementComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
