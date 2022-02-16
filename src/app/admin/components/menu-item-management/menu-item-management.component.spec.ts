import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuItemManagementComponent } from './menu-item-management.component';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('MenuItemManagementComponent', () => {
  let component: MenuItemManagementComponent;
  let fixture: ComponentFixture<MenuItemManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuItemManagementComponent ],
      imports: [MatDialogModule, HttpClientTestingModule]
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
