import { TestBed } from '@angular/core/testing';

import { InMemMenuService } from './in-mem-menu.service';

describe('InMemMenuService', () => {
  let service: InMemMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InMemMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
