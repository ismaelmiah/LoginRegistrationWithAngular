import { TestBed } from '@angular/core/testing';

import { UserEditResolverService } from './user-edit-resolver.service';

describe('UserEditResolverService', () => {
  let service: UserEditResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserEditResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
