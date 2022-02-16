import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { mockMenuItems } from '../testing/mockMenuItems';

@Injectable({
  providedIn: 'root'
})
export class InMemMenuItemService implements InMemoryDbService {
  createDb() {
    const menuItems = mockMenuItems;
    return { menuItems };
  }
}
