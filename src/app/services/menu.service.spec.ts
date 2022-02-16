import { TestBed } from '@angular/core/testing';

import { MenuService } from './menu.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MenuItem } from '../models/menu-item';
import { mockMenuItems } from '../testing/mockMenuItems';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemMenuItemService } from './in-mem-menu-item.service';

describe('MenuService', () => {
  let service: MenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        HttpClientInMemoryWebApiModule.forRoot(InMemMenuItemService),
      ]
    });
    service = TestBed.inject(MenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should match the mock menu item results',
    (done: DoneFn) => {
      service.getMenuItems().subscribe((value: MenuItem[]) => {
        expect(value).toEqual(mockMenuItems);
        done();
      });
    });

  const newMenuItem = {id: 100, title: 'new item', description: 'new descirption', image: 'http://myurl.com', price: 1.99 };

  it('should add a new menu item', (done: DoneFn) => {
    service.createMenuItem(newMenuItem).subscribe((value: MenuItem) => {
      expect(value).toEqual(newMenuItem);
      done();
    });
  });
});
