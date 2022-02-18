import { MenuResolver } from './menu-resolver';
import { async, TestBed } from '@angular/core/testing';
import { MenuLandingComponent } from '../menu/menu-landing/menu-landing.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MenuService } from '../services/menu.service';

describe('MenuResolver', () => {
  let resolver: MenuResolver;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: []
    });
    resolver = TestBed.inject(MenuResolver);
  }));

  it('should create an instance', () => {
    expect(resolver).toBeTruthy();
  });
});
