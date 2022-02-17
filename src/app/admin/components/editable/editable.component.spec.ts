import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditableComponent } from './editable.component';
import { ViewContainerRef } from '@angular/core';
import { MenuItemManagementComponent } from '../menu-item-management/menu-item-management.component';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

describe('EditableComponent', () => {
  let component: EditableComponent;
  let fixture: ComponentFixture<MenuItemManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditableComponent, MenuItemManagementComponent ],
      imports: [MatDialogModule, HttpClientTestingModule, MatSnackBarModule, MatButtonToggleModule],
    })
    .compileComponents();
  }));

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(MenuItemManagementComponent);
  //   component = fixture.componentInstance.editableComponents.first;
  //   fixture.detectChanges();
  // });
  //
  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
