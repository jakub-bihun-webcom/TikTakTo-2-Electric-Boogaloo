import { TestBed } from '@angular/core/testing';

import { UserCashOutManager } from './user-cashout-manager.service';

describe('subtractUserAccountMoneyService', () => {
  let service: UserCashOutManager;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserCashOutManager);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
