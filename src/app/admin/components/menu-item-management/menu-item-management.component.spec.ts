import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuItemManagementComponent } from './menu-item-management.component';

describe('MenuItemManagementComponent', () => {
  let component: MenuItemManagementComponent;
  let fixture: ComponentFixture<MenuItemManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuItemManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuItemManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
