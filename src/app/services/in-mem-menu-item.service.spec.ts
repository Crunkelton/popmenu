import { TestBed } from '@angular/core/testing';

import { InMemMenuItemService } from './in-mem-menu-item-service.service';

describe('InMemMenuItemServiceService', () => {
  let service: InMemMenuItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InMemMenuItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
