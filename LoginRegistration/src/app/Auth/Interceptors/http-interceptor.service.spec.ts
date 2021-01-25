import { TestBed } from '@angular/core/testing';

import { httpInterceptor } from './http-interceptor.service';

describe('AuthInterceptorService', () => {
  let service: httpInterceptor;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(httpInterceptor);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
