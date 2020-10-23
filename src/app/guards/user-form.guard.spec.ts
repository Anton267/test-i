import { TestBed } from '@angular/core/testing';

import { UserFormGuard } from './user-form.guard';

describe('UserFormGuard', () => {
  let guard: UserFormGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UserFormGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
