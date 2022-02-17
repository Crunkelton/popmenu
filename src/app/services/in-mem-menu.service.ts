import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { mockMenus } from '../testing/mockMenus';
import { mockMenuItems } from '../testing/mockMenuItems';

@Injectable({
  providedIn: 'root'
})
export class InMemMenuService implements InMemoryDbService {
  createDb() {
    const menus = mockMenus;
    const menuItems = mockMenuItems;
    return { menus, menuItems };
  }
}
