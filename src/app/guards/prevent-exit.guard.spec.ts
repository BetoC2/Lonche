import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { preventExitGuard } from './prevent-exit.guard';

describe('preventExitGuard', () => {
  const executeGuard: CanDeactivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => preventExitGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
