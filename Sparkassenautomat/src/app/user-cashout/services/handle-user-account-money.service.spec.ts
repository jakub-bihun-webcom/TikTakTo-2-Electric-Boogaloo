import { TestBed } from '@angular/core/testing';

import { HandleUserAccountMoneyService } from './handle-user-account-money.service';

describe('HandleUserAccountMoneyService', () => {
  let service: HandleUserAccountMoneyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HandleUserAccountMoneyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
