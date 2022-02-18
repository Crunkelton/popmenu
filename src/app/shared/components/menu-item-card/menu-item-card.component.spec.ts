import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuItemCardComponent } from './menu-item-card.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MenuItem } from '../../../models/menu-item';
import { ActivatedRoute } from '@angular/router';

describe('MenuItemCardComponent', () => {
  let component: MenuItemCardComponent;
  let fixture: ComponentFixture<MenuItemCardComponent>;
  const menuItem: MenuItem = { id: 0, menuId: 0, title: '', description: '', image: '', price: 0.00 };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuItemCardComponent ],
      imports: [ HttpClientTestingModule ],
      // providers: [ ActivatedRoute ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuItemCardComponent);
    component = fixture.componentInstance;

    component.menuItem = menuItem;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
