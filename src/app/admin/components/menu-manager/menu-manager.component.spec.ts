import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuManagerComponent } from './menu-manager.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

describe('MenuManagerComponent', () => {
  let component: MenuManagerComponent;
  let fixture: ComponentFixture<MenuManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuManagerComponent ],
      imports: [ HttpClientTestingModule, ReactiveFormsModule, RouterModule.forRoot([]), ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
