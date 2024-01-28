import { TestBed } from '@angular/core/testing';

import { AuthExaminaterGuard } from './auth-examinater.guard';

describe('AuthExaminaterGuard', () => {
  let guard: AuthExaminaterGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthExaminaterGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
