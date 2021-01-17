import { TestBed } from '@angular/core/testing';

import { LocalBackendService } from './local-backend.service';

describe('LocaslBackendService', () => {
  let service: LocalBackendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalBackendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
