import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuLandingComponent } from './menu-landing.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute, RouterModule } from '@angular/router';

describe('MenuLandingComponent', () => {
  let component: MenuLandingComponent;
  let fixture: ComponentFixture<MenuLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuLandingComponent ],
      imports: [ HttpClientTestingModule, RouterModule.forRoot([]), ],
      // providers: [ ActivatedRoute ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
