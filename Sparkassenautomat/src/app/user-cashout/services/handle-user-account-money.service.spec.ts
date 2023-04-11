import { TestBed } from '@angular/core/testing';

import { subtractUserAccountMoney } from './subtract-user-account-money.service';

describe('subtractUserAccountMoneyService', () => {
  let service: subtractUserAccountMoney;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(subtractUserAccountMoney);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
