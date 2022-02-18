import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuItemManagementComponent } from './menu-item-management.component';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { RouterModule } from '@angular/router';

describe('MenuItemManagementComponent', () => {
  let component: MenuItemManagementComponent;
  let fixture: ComponentFixture<MenuItemManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuItemManagementComponent ],
      imports: [
        MatDialogModule,
        HttpClientTestingModule,
        MatSnackBarModule,
        MatButtonToggleModule,
        RouterModule.forRoot([]),
      ],
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

  it('should have a display mode', () => {
    expect(component.mode.value).toEqual('menu');
  });
});
